import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const SearchBar = (props) => {
    return (
        <Form>
            <FormGroup>
                <Label for="search">Enter your search here</Label>
                <Input type="text" name="search" id="search" placeholder="War of the Worlds" onChange={props.onChange} value={props.search}/>
                <Button color="success" onClick={props.onClick}>Search</Button>
            </FormGroup>
        </Form>
    )
}

export default SearchBar;