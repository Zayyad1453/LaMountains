import React, { Component } from 'react';


class Benefits extends Component {
  render() {
    return (
      <section className="py-0 tabs">

        <ul className="nav nav-tabs sticky-header-text tabs-header p-0 border-bottom-0">
          <div className="container ">
            <li className="active"><a href="#tab1" data-toggle="tab">Mountain 1</a></li>
            <li><a href="#tab2" data-toggle="tab">Mountain 2</a></li>
          </div>
        </ul>
        <div className="tab-content h-100">
          <div className="tab-pane active" id="tab1">

            <div className="container">
              <div className="row w-100">
                <div className="col-md-6">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title header-text">
                        <a data-toggle="collapse" data-parent="tab-pane" href="#collapseOne">
                          MOUNTAIN 1
                    </a>
                      </h4>
                    </div>
                    <div id="collapseOne" className="panel-collapse collapse in">
                      <div className="panel-body">

                        <div className="card" style={{ width: "23rem" }}>
                          <div className="card-body">
                            
                            <div className="row card-content">
                            <div className="col-6">
                                <div className="container">
                                <p className="sticky-header-text">SCHEDULE</p>
                                </div>
                              </div>
                              <div className="col-6">
                              </div>                              
                              <div className="col-6">
                                <div className="container">
                                  25 Nov 2016
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="container">
                                  Vestibulum viverra
                                </div>
                              </div>

                              <div className="col-6">
                                <div className="container">
                                  28 Nov 2016
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="container">
                                  Vestibulum viverra
                                </div>
                              </div>

                              <div className="col-6">
                                <div className="container">
                                  18 Dec 2016
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="container">
                                  Vestibulum viverra
                                </div>
                              </div>

                              
                              <div className="col-6">
                                <div className="container">
                                  06 Jan 2017
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="container">
                                  Vestibulum viverra
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                      
                      </div>
                    </div>
                  </div>

                </div>
                <div className="col-md-6">

                </div>
              </div>
            </div>


          </div>

          <div className="tab-pane" id="tab2">

            <div className="container">
              <div className="row w-100">
                <div className="col-md-6">

                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title header-text">
                        <a data-toggle="collapse" data-parent="tab-pane" href="#collapseTwo">
                          MOUNTAIN 2
                    </a>
                      </h4>
                    </div>
                    <div id="collapseTwo" className="panel-collapse collapse">
                      <div className="panel-body">
                        
                      <div className="card" style={{ width: "23rem" }}>
                          <div className="card-body">
                            
                            <div className="row card-content">
                            <div className="col-6">
                                <div className="container">
                                <p className="sticky-header-text">SCHEDULE</p>
                                </div>
                              </div>
                              <div className="col-6">
                              </div>                              
                              <div className="col-6">
                                <div className="container">
                                  17 Nov 2016
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="container">
                                  Vestibulum viverra
                                </div>
                              </div>

                              <div className="col-6">
                                <div className="container">
                                  13 Dec 2016
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="container">
                                  Vestibulum viverra
                                </div>
                              </div>

                              <div className="col-6">
                                <div className="container">
                                  28 Dec 2016
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="container">
                                  Vestibulum viverra
                                </div>
                              </div>

                              
                              <div className="col-6">
                                <div className="container">
                                  09 Feb 2017
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="container">
                                  Vestibulum viverra
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                      
                  </div>
                    </div>
                  </div>

                </div>
                <div className="col-md-6">
                </div>
              </div>
            </div>



          </div>

        </div>
      </section>

    );
  }
}

export default Benefits;
