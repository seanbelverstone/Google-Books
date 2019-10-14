import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import MainNav from "./components/Navbar";
import MainJumbotron from "./components/MainJumbotron";
import SearchBar from "./components/SearchBar";
import API from "./utils/API";
import "./App.css";

class App extends Component {

  state = {
    search: ""
  };

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState(
      {[name]: value}
    )
  }

  getSearch = (event) => {
    event.preventDefault();
    console.log("clicked");
    API.getSearch(this.state.search);
  }

  render() {
    return (
      <Router>
        <div>
          <MainNav>
            <Route exact path="/" />
            {/* <Route path="/saved" component={SavedBooks} /> */}
          </MainNav>
          <MainJumbotron />
          <SearchBar 
          search={this.state.search}
          onChange={this.handleChange}
          onClick={this.getSearch}/>
        </div>
      </Router>
    );
  }
}

export default App;
