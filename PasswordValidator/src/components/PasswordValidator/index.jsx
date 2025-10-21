import {useState} from 'react'
import {
  ErrorMessage,
  Info,
  InputContainer,
  MainContainer,
  MainHeading,
  PasswordCard,
} from './styledComponents'

const PasswordValidator = () => {
  const [showError, setShowError] = useState(true)
  const [password, setPassword] = useState('')

  const handlePasswordChange = e => {
    const {target} = e
    const {value} = target
    setPassword(value)
    setShowError(value.trim().length < 8)
  }

  return (
    <MainContainer>
      <PasswordCard>
        <MainHeading>Password Validator</MainHeading>
        <Info>Check how strong and secure is your password</Info>
        <InputContainer
          value={password}
          type="password"
          onChange={handlePasswordChange}
        />
        {showError && (
          <ErrorMessage>
            Your password must be at least 8 characters
          </ErrorMessage>
        )}
      </PasswordCard>
    </MainContainer>
  )
}

export default PasswordValidator
