import styled from "styled-components"

export const GameContainer = styled.div`
  min-height: 100vh;
  background-color: #223a5f;
  color: #ffffff;
  padding: 2em 1em;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  user-select: none;
`

export const ChoiceContainer = styled.ul`
  padding: 0;
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 350px;
  margin: 10em auto 0em auto;

  @media screen and (min-width: 768px) {
    max-width: 500px;
    width: 100%;
  }
`
export const ResultMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  justify-content: center;
  align-items: center;
  padding: 1em;
  margin: 3.1em auto 0em auto;

  @media screen and (min-width: 768px) {
    width: 60%;
  }
`

export const ResultContainer = styled.div`
  margin: 4.7em auto;
  min-width: 90%;
  font-family: Roboto;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 1rem;
  align-self: flex-start;
`

export const ResultImage = styled.img`
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
export const StyledButton = styled.button`
  padding: 0.5em 1em;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 1rem;
  font-weight: 600;
  font-family: Bree Serif;
  color: #223a5f;
`
export const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Message = styled.p`
  font-size: 2rem;
  font-weight: bold;
`
