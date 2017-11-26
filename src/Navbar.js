import React, { Component } from 'react';
import Todos from './Todos';
import Toggler from './Toggler';
import WebTodos from './WebTodos';

import {
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom'

class Navbar extends Component {

    render() {
        return (
            <Router>
                <div>

                    <div className="container-fluid">
                        <nav className="navbar navbar-default">
                            <div className="container-fluid">
                                <div className="navbar-header">
                                    <a className="navbar-brand">React App</a>
                                </div>
                                
                                <ul className="nav navbar-nav">
                                    <li><NavLink to="/toggler" activeClassName="active">Toggler</NavLink></li>
                                    <li><NavLink to="/todos" activeClassName="active">Todos</NavLink></li>
                                    <li><NavLink to="/web" activeClassName="active">Web Todos</NavLink></li>
                                </ul>
                            </div>  
                        </nav>

                        <Route exact path="/toggler" component={Toggler} />
                        <Route exact path="/todos" component={Todos} />
                        <Route exact path="/web" component={WebTodos} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default Navbar;
