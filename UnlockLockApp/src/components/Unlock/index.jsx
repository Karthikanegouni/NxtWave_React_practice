import { useState } from 'react'
import {
  MainContainer,
  DeviceStatus,
  Image,
  StyledButton,
} from './styledComponents'

const Unlock = () => {
  const [isLocked, setIsLocked] = useState(true)

  const imageUrl = isLocked
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'

  const imageAltText = isLocked ? 'lock' : 'Unlock'
  const statusText = isLocked
    ? 'Your Device is Locked'
    : 'Your Device is Unlocked'
  return (
    <MainContainer>
      <Image src={imageUrl} alt={imageAltText} />
      <DeviceStatus>{statusText}</DeviceStatus>
      <StyledButton type="button" onClick={() => setIsLocked((prev) => !prev)}>
        {isLocked ? 'Unlock' : 'Lock'}
      </StyledButton>
    </MainContainer>
  )
}

export default Unlock
