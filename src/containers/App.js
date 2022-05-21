import React from "react";
import Cards from "../components/Cards";
import NavBar from "../components/NavBar";
import "./App.css";
import Scroll from "../components/Scroll";
import LoadingSpinner from "../components/LoadingSpinner";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: "",
            isLoading: false,
            errorMessage: "",
            prefixField: "",
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((users) => {
                setTimeout(() => {
                    this.setState({ robots: users });
                    this.setState({ isLoading: false });
                }, 3000); // This timer just for simulation
            })
            .catch(() => {
                this.setState({ errorMessage: "Unable to fetch user list" });
                this.setState({ isLoading: false });
                this.setState({ robots: [] });
            });
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    };

    onPrefixChange = (event) => {
        this.setState({ prefixField: event.target.value });
    };

    render() {
        const { robots, searchField, isLoading, errorMessage } = this.state;
        const filteredRobots = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        const renderRobots = (
            <Scroll>
                <Cards
                    robots={filteredRobots}
                    prefix={this.state.prefixField}
                />
            </Scroll>
        );
        return (
            <div>
                <NavBar
                    onSearchChange={this.onSearchChange}
                    onPrefixChange={this.onPrefixChange}
                />
                {isLoading ? <LoadingSpinner /> : renderRobots}
                {errorMessage && <div className="error">{errorMessage}</div>}
            </div>
        );
    }
}

export default App;
