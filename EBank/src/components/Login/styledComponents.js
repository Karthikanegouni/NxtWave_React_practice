import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  background-color: #152850;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LoginCard = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  min-height: 65vh;
  background-color: #e0eefe;
  border-radius: 1.5em;

  @media screen and (min-width: 992px) {
    width: 60%;
  }
`

export const LoginImageContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    max-width: 600px;
  }
`

export const LoginForm = styled.form`
  display: flex;
  width: 50%;
  flex-direction: column;
  background-color: #ffffff;
  padding: 1em 2em;
  border-radius: 1.5em;

  h1 {
    color: #183b56;
    font-size: 2.2rem;
    margin-top: 3em;
  }

  label {
    color: #5a7184;
    font-weight: 600;
    margin: 1em 0;
  }

  input {
    margin-bottom: 1.5em;
    padding: 1em;
    border: 1px solid #c3cad9;
    border-radius: 10px;
    outline: none;
    font-size: 1rem;
  }

  button {
    padding: 1em;
    outline: none;
    border: none;
    background-color: #1565d8;
    color: #ffffff;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 10px;
    cursor: pointer;
  }

  p {
    color: #ff0b37;
    margin: 0;
    text-align: center;
    font-weight: 500;
  }
`
