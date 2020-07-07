import React, { Component } from "react";
import { Paper, TextField } from "@material-ui/core";

class SearchBar extends Component {
  state = {
    searchTerm: "",
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { searchTerm } = this.state;
    return (
      <div>
        <Paper elevation={0} style={{ padding: "2rem" }}>
          <form
            onSubmit={(e) => {
              if (searchTerm === "") {
                alert("Please enter video to search");
              } else {
                this.props.handleSubmit(this.state.searchTerm);
              }
              e.preventDefault();
            }}
          >
            <TextField
              fullWidth
              name="searchTerm"
              label="Search Videos"
              onChange={this.onChange}
              helperText={searchTerm === "" ? "Cannot be empty" : ""}
            />
          </form>
        </Paper>
      </div>
    );
  }
}

export default SearchBar;
