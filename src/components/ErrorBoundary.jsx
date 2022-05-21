import React from "react";

class ErrorBoundary extends React.Component {

    constructor() {
        super();
        this.state = {
            hasError: false,
            error: "",
            info: ""
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true, error: error, info: info })

    }

    render() {
        const errorComponent = (<div>
            <h1 className="tc">Oooops. There is an Error</h1>
        </div>);
        return this.state.hasError ? errorComponent : this.props.children;
    }
}

export default ErrorBoundary