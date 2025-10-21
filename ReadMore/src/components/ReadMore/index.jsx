import { useState } from 'react'
import {
  Description,
  Heading,
  AppContainer,
  Image,
  CardContainer,
  Button,
} from './styledComponents'

const ReadMore = (props) => {
  const [isDisplay, setDisplay] = useState(false)
  const { reactHooksDescription } = props
  const initialText = reactHooksDescription.slice(0, 171)

  const displayMore = () => {
    setDisplay((prevState) => !prevState)
  }
  return (
    <AppContainer>
      <CardContainer>
        <Heading>React Hooks</Heading>
        <Description>Hooks are a new addition to React</Description>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <Description>
          {isDisplay ? reactHooksDescription : initialText}
        </Description>
        <Button type="button" onClick={displayMore}>
          {isDisplay ? 'Read Less' : 'Read More'}
        </Button>
      </CardContainer>
    </AppContainer>
  )
}

export default ReadMore
