import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #24263c;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const PasswordCard = styled.div`
  background-color: #383a4e;
  min-height: 20vh;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em 2em;
  border-radius: 10px;
  text-align: center;


  @media (max-width: 767px) {
    width: 95%;
    margin: auto;
  }
`

export const MainHeading = styled.h1`
font-family: Roboto;
`

export const Info = styled.p`
  color: #f8fafc;
`

export const InputContainer = styled.input`
  font-size: 1rem;
  padding: 0.5em 1em;
  width: 90%;
  outline: none;
  border: none;
  border-radius: 5px;
`

export const ErrorMessage = styled.p`
  color: #ef4444;
`
