import styled from "styled-components"

export const RulesContainer = styled.div`
  background-color: #ffffff;
  padding: 1em 2em;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin: auto;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    width: 90%;
  }
`
export const Image = styled.img`
  width: 90%;
  align-self: center;
`

export const RulesButton = styled.button`
  padding: 0.5em 1em;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 1rem;
  font-weight: 600;
  font-family: Bree Serif;
  color: #223a5f;
`
