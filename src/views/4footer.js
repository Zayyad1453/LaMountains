import React, { Component } from 'react';
import logo from '../images/logos/logo.png';

class Nav extends Component {
    render() {
        return (
            <div className="footer w-100">
                <nav className="navbar navbar-inverse">
                    <div className="container">
                        <div className="navbar-header d-block">
                            <img src={logo} className="img-responsive logo sticky-logo" alt="company logo" />
                            {/* <span> */}
                                <span className=' sticky-header-text d-inline'>
                                    <span className="text-grey">
                                        LOSANGELES
                                    </span>

                                    <span className="text-grey d-block sticky-header-text--btm">
                                        MOUNTAINS
                                    </span>
                                </span>
                            {/* </span> */}
                        </div>

                        <ul className="nav navbar-nav navbar-right text-grey">
                            {/* <li><a href="#"><span className="glyphicon glyphicon-user cb">01. HISTORY</span></a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-log-in cb">02. TEAM</span></a></li> */}
                            <p>Copyright 2016. All rights reserved</p>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;
