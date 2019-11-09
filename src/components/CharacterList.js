import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
// import axios
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";
import SearchForm from "./SearchForm";

const NavStyle = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1%;
  padding: 1%;
  width: 200px;
  border: 1px solid lightgrey;
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        const character = response.data.results;
        console.log(character);
        setCharacter(character);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <section className="character-list">
      <div>
        <NavStyle>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/character">Character List</NavLink>
        </NavStyle>
        <SearchForm />
      </div>

      <h2>
        {character.map(person => {
          return (
            <CharacterCard
              key={person.id}
              name={person.name}
              species={person.species}
              origin={person.origin}
            />
          );
        })}
      </h2>
    </section>
  );
}
