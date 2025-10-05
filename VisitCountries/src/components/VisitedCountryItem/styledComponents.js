import styled from 'styled-components'

export const VisitedItem = styled.li`
  min-width: 200px;
  flex-grow: 1;
  max-width: 250px;
  margin-bottom: 1em;

  img {
    width: 100%;
    max-width: 250px;
  }

  p {
    font-size: 1rem;
    font-weight: 600;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1em;
  }
`

export const OutlineButton = styled.button`
  border: 1px solid #cbd5e1;
  background-color: transparent;
  color: #ffffff;
  padding: 0.5em 1em;
  cursor: pointer;
`
