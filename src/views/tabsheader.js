import React, { Component } from 'react';
// import hotcup from './../images/hot-cup-half.png';
// import coldcup from './../images/cold-cup-half.png';

class TabsHeader extends Component {
  render() {
    return (
      // <section id="TabsHeader">
      <div id="team" className="container tab-header-container">
        <div className="row">
          <div className="tabs-header-text-container">
          <div className=' header-text'>
            <span className="text-grey">
              02.
              </span>
            <span className="num">
              climb
            </span>
          </div>
          </div>
          <div className='sub-header'>
            <span >
              Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue.
              </span>
          </div>
        </div>

      </div>


      // </section>
    );
  }
}

export default TabsHeader;
