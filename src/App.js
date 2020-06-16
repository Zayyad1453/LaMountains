import React, { Component } from 'react';
import './App.css';
import Main from './views/1main';
import History from './views/2benefits';
import StickyNav from './views/stickyNav';
import TabHeader from './views/tabsheader';
import Tabs from './views/3tabs';
import Footer from './views/4footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
        <StickyNav />
        <History />
        <TabHeader/>
        <Tabs />
        <Footer />
      </div>


    );
  }
}

export default App;
