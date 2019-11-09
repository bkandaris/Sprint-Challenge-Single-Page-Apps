import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavStyle = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1%;
  padding: 1%;
  width: 200px;
  border: 1px solid lightgrey;
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <center>
          <img
            className="main-img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
          />
          <NavStyle>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/character">Character List</NavLink>
          </NavStyle>
        </center>
      </header>
    </section>
  );
}
