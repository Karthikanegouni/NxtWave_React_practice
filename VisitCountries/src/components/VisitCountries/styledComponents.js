import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  width: 70%;
  margin: 0 auto;
  padding: 1em 3em;
  background-color: #161624;
  color: #f1f5f9;
  font-family: roboto;
  user-select: none;
`
export const Heading = styled.h1`
  font-size: 2rem;
  color: #ffffff;
`

export const UnorderedList = styled.ul`
  max-height: 35vh;
  list-style-type: none;
  padding: 0;
  overflow-y: auto;
  border: 1px solid #334155;
  border-radius: 15px;
  background-color: #1f1f2f;
`

export const VisitedCountriesList = styled.ul`
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
`
export const EmptyView = styled.div`
  min-height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1.5em;
  }
`
