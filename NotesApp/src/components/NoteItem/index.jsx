import { ListItem, Title, Note } from './styledComponents'

const NoteItem = (props) => {
  const { noteDetails } = props
  const { title, noteText } = noteDetails

  return (
    <ListItem>
      <Title>{title}</Title>
      <Note>{noteText}</Note>
    </ListItem>
  )
}

export default NoteItem
