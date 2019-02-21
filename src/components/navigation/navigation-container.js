import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavigationContainer extends Component {
    constructor(){
    super();
}
    render() {
        return (
            <div>
                <NavLink exact to="/">Home</NavLink>

                <NavLink to="/about-me">About Us</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/vlog">Vlog</NavLink>
                <NavLink to="/counter">You Count</NavLink>

            </div>
        )
    }
}