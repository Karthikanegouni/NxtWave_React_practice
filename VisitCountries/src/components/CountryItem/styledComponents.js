import styled from 'styled-components'

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
  padding: 0.5em 2em;
  border-bottom: 0.5px solid #334155;
`

export const StyledButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5em 2em;
  outline: none;
  border: none;
  border-radius: 5px;
`

export const VisitedText = styled.p`
  color: #94a3b8;
  padding: 0.5em 1.5em;
  font-size: 1rem;
`
