import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import MainNav from "./components/Navbar";
import MainJumbotron from "./components/MainJumbotron";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <MainNav>
            <Route exact path="/" />
            {/* <Route path="/saved" component={SavedBooks} /> */}
          </MainNav>
          <MainJumbotron />
        </div>
      </Router>
    );
  }
}

export default App;
