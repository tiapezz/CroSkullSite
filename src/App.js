import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";


import { TransitionGroup, CSSTransition } from "react-transition-group";
import { ethers } from 'ethers';
import store from "./redux/store";

import Home from "./components/Home/Home";

import Graveyard from "./components/Graveyard/Graveyard";

import "./App.css";

let provider, contract, stakingContract, ethProvider;
class App extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.subscribe()
  }


  subscribe = () => {
    store.subscribe(() => {
      this.setState({
        blockchain: store.getState().blockchain
      });
    });
  }


  render() {
    return (
      <div className="main">
        {(
          <>
            <HashRouter
              basename="/">
              <Route
                render={({ location }) => (
                  <TransitionGroup className={`container-fluid ${location.pathname.replace('/', '')}`}>
                    <CSSTransition
                      key={location.pathname}
                      classNames="fade"
                      timeout={500}
                    >
                      <Switch
                        location={location}
                      >
                        <Route
                          path="/"
                          exact
                          render={() => (
                            <Home></Home>
                          )}
                        />
                        <Route
                          path="/graveyard"
                          render={() => (
                            <Graveyard />
                          )}
                        />
                      </Switch>
                    </CSSTransition>
                  </TransitionGroup>
                )} />
            </HashRouter>
          </>
        )}
      </div>
    );
  }
}

export default App;
//export default connect(mapStateToProps)(App);


const formatEther = bn => ethers.utils.formatEther(bn)
const formatUnits = (value, unit) => ethers.utils.formatUnits(value, unit)
const getAddress = address => ethers.utils.getAddress(address)
//preparing modal
