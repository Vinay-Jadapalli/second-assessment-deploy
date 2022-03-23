import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export class Homepage extends Component {
    render() {
        return (
            <div>
               
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <NavLink className="navbar-brand" to="/">Home Page</NavLink>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/CheckList"><b>Check List</b></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Login"><b>Login</b></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/PrintData"><b>Print Data</b></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/MultiPage"><b>Multi-page</b></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/ContextAPI"><b>Context API</b></NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Homepage;