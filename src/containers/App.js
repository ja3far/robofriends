import React, { useState, useEffect } from "react";
import Cards from "../components/Cards";
import NavBar from "../components/NavBar";
import "./App.css";
import Scroll from "../components/Scroll";
import LoadingSpinner from "../components/LoadingSpinner";

const App = () => {
    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [prefixField, setPrefixField] = useState("");
    const [filteredRobots, setFilteredRobots] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((users) => {
                setTimeout(() => {
                    setRobots(users);
                    setIsLoading(false);
                }, 3000); // This timer just for simulation
            })
            .catch(() => {
                setErrorMessage("Unable to fetch user list");
                setIsLoading(false);
                setRobots([]);
            });
    }, []);

    const onSearchChange = (event) => {
        setSearchField(event.target.value);
    };

    const onPrefixChange = (event) => {
        setPrefixField(event.target.value);
    };

    useEffect(() => {
        setFilteredRobots(
            robots.filter((robot) => {
                return robot.name
                    .toLowerCase()
                    .includes(searchField.toLowerCase());
            })
        );
    }, [robots, searchField]);

    const renderRobots = (
        <Scroll>
            <Cards robots={filteredRobots} prefix={prefixField} />
        </Scroll>
    );

    return (
        <div>
            <NavBar
                onSearchChange={onSearchChange}
                onPrefixChange={onPrefixChange}
            />
            {isLoading ? <LoadingSpinner /> : renderRobots}
            {errorMessage && <div className="error">{errorMessage}</div>}
        </div>
    );
};

export default App;
