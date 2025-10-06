import styled from 'styled-components'

export const TravelGuideContainer = styled.div`
  background-color: #eef4f7;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em 3em;
  width: 100%;
  user-select: none;
`

export const Heading = styled.h1`
  color: #334155;
  padding: 0.5em 0;
  border-bottom: 3px solid #52bbf0;
  text-align: center;
`

export const PackagesListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1em;
`

export const LoaderContainer = styled.div`
  min-height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
