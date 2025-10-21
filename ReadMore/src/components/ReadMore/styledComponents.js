// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;

  @media (min-width: 768px) {
    width: 100%;
    max-width: 600px;
  }
`
export const Heading = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  font-family: 'Roboto';
  color: #1e293b;
`
export const Description = styled.p`
  font-size: 1rem;
  font-family: 'Roboto';
  color: #334155;
`
export const Image = styled.img`
  width: 100%;
`
export const Button = styled.button`
  background-color: #1f81ff;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  height: 30px;
  width: 80px;
  font-size: 12px;
  cursor: pointer;
`
