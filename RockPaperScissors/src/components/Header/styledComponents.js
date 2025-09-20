import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border: 2px solid #ffffff;
  padding: 1em;
  width: 100%;
  margin: auto;
  border-radius: 1em;
  font-family: Bree Serif;
  font-size: 1rem;
  @media screen and (min-width: 576px) {
    width: 80%;
    margin: auto;
    padding: 1em 2em;
  }
`
export const Text = styled.p`
  font-size: 1.7rem;
  font-weight: 600;
  margin: 0;
`

export const Heading = styled.h1`
  margin: 0;
  span {
    display: block;
    font-size: 1.5rem;
    line-height: 1.5;
  }
`

export const Score = styled.p`
  font-size: 3rem;
  font-weight: bold;
  font-family: Roboto;
  margin: 0;
`

export const ScoreCard = styled.div`
  background-color: #ffffff;
  color: #223a5f;
  min-width: 100px;
  padding: 1em 2em;
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Roboto;

  @media screen and (min-width: 768px) {
    min-width: 150px;
  }
`
