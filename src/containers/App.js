import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
// import { robots } from './robots';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
        console.log('constructor');
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json()) // here you convert the response to json data
            .then(users => this.setState({ robots: users })); // here you use that json data as argument to put it into setState
        console.log('componentDidMount');
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value }); // IMPORTANT
        // const filteredRobots = this.state.robots.filter(robots => {
        //     return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        // });

    }

    render() {
        const { robots, searchfield } = this.state;
        console.log('render');
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        return !robots.length ?
            <h1>Loading</h1>
            :
            (
                <div className='tc'>
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>

                </div>
            );
    }
}

export default App;