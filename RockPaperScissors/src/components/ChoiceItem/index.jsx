import {Image, ChoiceButton, ListItem} from './styledComponents'

const ChoiceItem = ({data, setUserChoice}) => {
  const {id, imageUrl} = data
  const testId = `${id.toLowerCase()}Button`

  const handleSelect = () => {
    setUserChoice(id)
  }
  return (
    <ListItem>
      <ChoiceButton type="button" data-testid={testId} onClick={handleSelect}>
        <Image src={imageUrl} alt={id} />
      </ChoiceButton>
    </ListItem>
  )
}

export default ChoiceItem
