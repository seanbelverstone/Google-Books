import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MainNav from "./components/Navbar";
import MainJumbotron from "./components/MainJumbotron";
import SavedBooks from "./components/SavedBooks";
import SearchPage from "./components/SearchPage";
import "./App.css";

class App extends Component {

  render() {
    return (
      <Router>
        <div className="container">
          <MainNav>

            <Route path="/" component={SearchPage}/>
            <Route path="/saved" component={SavedBooks} />

          </MainNav>
          <MainJumbotron />

          <Switch>
          <Route path="/saved">
            <SavedBooks />
          </Route>
          <Route path="/">
            <SearchPage />
          </Route>
        </Switch>


        </div>
      </Router>
    );
  }
}

export default App;
