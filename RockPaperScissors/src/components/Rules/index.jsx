import Popup from "reactjs-popup"
import { RiCloseLine } from "react-icons/ri"
import { RulesContainer, Image,RulesButton } from "./styledComponents"

const Rules = () => (
  <Popup
    trigger={<RulesButton>Rules</RulesButton>}
    position="top left"
    modal="true"
  >
    {(close) => (
      <RulesContainer>
        <RiCloseLine onClick={close} size={25}/>
        <Image
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
          alt="rules"
        />
      </RulesContainer>
    )}
  </Popup>
)
export default Rules
