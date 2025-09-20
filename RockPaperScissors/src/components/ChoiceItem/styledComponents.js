import styled from "styled-components"

export const ChoiceButton = styled.button`
  height: 150px;
  width: 150px;
  border-radius: 100%;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 250px;
    height: 250px;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const ListItem = styled.li`
  padding: 0;
  margin: 0;
  list-style: none;
`
