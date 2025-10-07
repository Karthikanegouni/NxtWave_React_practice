import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: #152850;
  color: #ffffff;
  min-height: 100vh;
  padding: 2em;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 3.5rem;
    text-align: center;
    margin-top: 3em;
  }

  img {
    align-self: center;
    max-width: 800px;
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em 3em;

  img {
    height: 3rem;
    cursor: pointer;
  }

  button {
    background-color: transparent;
    color: #ffffff;
    font-size: 1rem;
    border: 1px solid #ffffff;
    outline: none;
    padding: 0.5em 1.5em;
    border-radius: 5px;
    cursor: pointer;
  }
`
