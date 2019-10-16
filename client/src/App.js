import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import MainNav from "./components/Navbar";
import MainJumbotron from "./components/MainJumbotron";
import SearchBar from "./components/SearchBar";
import List from "./components/List";
import Book from "./components/Book";
import API from "./utils/API";
import "./App.css";

class App extends Component {

  state = {
    search: "",
    bookResults: []
  };

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState(
      {[name]: value}
    )
  }

  getSearch = (event) => {
    event.preventDefault();

    // Using utils, makes the axios call
    API.getSearch(this.state.search).then(() => {

      // Sets the state of bookResults to the API results
      this.setState({bookResults: API.results});

    });
    this.setState({search: ""});
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
        <List>
          <Book 
          title={this.state.bookResults}/>

          
        </List>
      </Router>
    );
  }
}

export default App;
