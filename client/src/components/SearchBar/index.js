import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const SearchBar = (props) => {
    return (
        <Form>
            <FormGroup>
                <Label for="searchBar">Enter your search here</Label>
                <Input type="text" name="searchBar" id="searchBar" placeholder="War of the Worlds"/>
                <Button color="success" type="submit" onClick={() => props.getSearch}>Search</Button>
            </FormGroup>
        </Form>
    )
}

export default SearchBar;