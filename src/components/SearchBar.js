import React, { useState, useContext } from "react";
import { Paper, TextField } from "@material-ui/core";
import AppContext from "../context/youtube/appContext";

const SearchBar = () => {
  const appContext = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState("");

  const onChange = (e) => {
    setSearchTerm(e.target.value);
  };
  
  return (
    <div>
      <Paper elevation={0} style={{ padding: "2rem" }}>
        <form
          onSubmit={(e) => {
            if (searchTerm === "") {
              alert("Please enter video to search");
            } else {
              appContext.handleSearchVideos(searchTerm);
            }
            e.preventDefault();
          }}
        >
          <TextField
            fullWidth
            name="searchTerm"
            label="Search Videos"
            onChange={onChange}
            helperText={searchTerm === "" ? "Cannot be empty" : ""}
          />
        </form>
      </Paper>
    </div>
  );
};

export default SearchBar;
