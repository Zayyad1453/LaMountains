import React, { Component } from 'react';
import Carousel from './carousel';

class History extends Component {
  render() {
    return (
      <section id="history">
        <div className="container">
          <div className="row">

            <div className="col-md-12">
              <div className="container">
                <div className="text text-sm">
                  <div className=' header-text'>
                    <span className="text-grey">
                      01.
                    </span>
                    <span className="num">
                      history
                    </span>
                  </div>
                  <div className="col-md-10 mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus est. Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam. Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue.
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Carousel/>
      </section>

    );
  }
}

export default History;
