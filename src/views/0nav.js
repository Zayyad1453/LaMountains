import React, { Component } from 'react';
import logo from '../images/logos/logo.png';

class Nav extends Component {
    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-transparent">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            {/* <a className="navbar-brand" href="#">WebSiteName</a> */}
                            <img src={logo} className="img-responsive logo" alt="company logo"/>
                        </div>

                        <ul className="nav navbar-nav navbar-right cw">
                            <li><a href="#history"><span className="glyphicon glyphicon-user"></span>01. HISTORY</a></li>
                            <li><a href="#team"><span className="glyphicon glyphicon-log-in"></span>02. TEAM</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;
