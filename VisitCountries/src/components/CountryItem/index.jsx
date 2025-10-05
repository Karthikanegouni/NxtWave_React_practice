import { ListItem, StyledButton, VisitedText } from './styledComponents'

const CountryItem = ({ country, handleVisitCountry }) => {
  const { name, id, isVisited } = country
  return (
    <ListItem>
      <p>{name}</p>
      {isVisited ? (
        <VisitedText>Visited</VisitedText>
      ) : (
        <StyledButton
          type="button"
          onClick={() => {
            handleVisitCountry(id)
          }}
        >
          Visit
        </StyledButton>
      )}
    </ListItem>
  )
}

export default CountryItem
