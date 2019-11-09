import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SearchForm() {
  // Setting up our state for search
  const [searchName, setSearchName] = useState("");
  const [nameResults, setNameResults] = useState("");

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleChange = event => {
    setSearchName(event.target.value);
  };

  return (
    <section className="search-form">
      <form>
        <label htmlFor="name">Find Your Character: </label>
        <input
          id="name"
          type="text"
          name="searchField"
          placeholder="Search"
          value={searchName}
          onChange={handleChange}
        />
      </form>
      <div className="character-list"></div>
    </section>
  );
}
