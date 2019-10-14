import React, { Component } from "react";
import MainNav from "./components/Navbar";
import { BrowserRouter as Router, Route} from "react-router-dom";
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
        </div>
      </Router>
    );
  }
}

export default App;
