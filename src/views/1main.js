import React, { Component } from 'react';
import Nav from './0nav'

class Main extends Component {
  render() {
    return (

      <section id="main">
        <Nav />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center">

                <div className=' header-text'>
                  <span className="text-grey">
                    LOSANGELES
               </span>

                  <span className="text-blue d-block header-text--btm">
                    MOUNTAINS
              </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    );
  }
}

export default Main;
