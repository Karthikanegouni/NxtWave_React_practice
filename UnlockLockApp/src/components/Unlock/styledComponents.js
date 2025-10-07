import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  font-family: Roboto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(#161617, #0b0c1e, #3c2940);
  color: #ffffff;
`
export const Image = styled.img`
  max-width: 200px;
`

export const DeviceStatus = styled.p`
  font-size: 2rem;
  font-family: Roboto;
  font-weight: bold;
`

export const StyledButton = styled.button`
  background-color: #06b6d4;
  color: #e2e8f0;
  font-size: 1rem;
  padding: 1rem;
  border: none;
  outline: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
`
