import React from 'react';
import { Jumbotron } from 'reactstrap';
import "./style.css";

const MainJumbotron = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Google Books</h1>
        <p className="lead">Search and save books provided by the Google Books API.</p>
        <p className="intro">Please begin by typing into the search bar below</p>
      </Jumbotron>
    </div>
  );
};

export default MainJumbotron;