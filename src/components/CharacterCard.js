import React from "react";
import styled from "styled-components";

const DivStyle = styled.div`
  background: black;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 5px;
  width: 95%;
  border: 5px solid yellow;
`;

const ParStyle = styled.p`
  background: yellow;
  color: red;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 5px;
  width: 95%;
  border: 5px solid yellow;
  border-radius: 5px;
`;

export default function CharacterCard(props) {
  return (
    <DivStyle key={props.id}>
      <div
      >
        <ParStyle>Name: {props.name}</ParStyle>
        <ParStyle>Species: {props.species}</ParStyle>
        <ParStyle>Origin: {props.origin.name} </ParStyle>
      </div>
    </DivStyle>
  );
}
