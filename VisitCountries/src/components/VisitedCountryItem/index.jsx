import { OutlineButton, VisitedItem } from './styledComponents'

const VisitedCountryItem = ({ visitedCountry, handleRemoveVisit }) => {
  const { id, name, imageUrl } = visitedCountry
  return (
    <VisitedItem>
      <img src={imageUrl} alt="thumbnail" />
      <div>
        <p>{name}</p>
        <OutlineButton
          type="button"
          onClick={() => {
            handleRemoveVisit(id)
          }}
        >
          Remove
        </OutlineButton>
      </div>
    </VisitedItem>
  )
}

export default VisitedCountryItem
