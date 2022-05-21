import React, { Component } from "react";
import './App.css';
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBox from '../components/SearchBox';
import { connect } from "react-redux";
import {searchfield}  from "../actions"

class App extends Component{
    constructor(){
        super()
        this.state = {
            robots : [],
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {this.setState({robots: users})});
    }



    render(){
        const { robots} = this.state;
        const {searchField , onSearchChange} =this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })

        const mapStateToProps = (state)=>{
            return{
                searchField: state.searchRobots.searchField
            }
        }
        const mapDispatchToProps =(dispatch)=>{
            return {
                onSearchChange: (event)=> dispatch(searchField(event.target.value))
            }
    
        }

        return !robots.length ?
             <h1> Loading</h1>:
        (
                <div className="tc">
                    <h1 className="f1"> Robofriends</h1>
                    <SearchBox searchChange = {onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots } />
                    </Scroll>
                </div>
                
            );
        }    
}

export default connect(mapStateToProps, mapDispatchToProps)(App);