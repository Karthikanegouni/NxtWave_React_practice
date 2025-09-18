import { Component } from "react"

import {
  AppContainer,
  MemeGeneratorContainer,
  Heading,
  FormAndMemeContainer,
  MemeContainer,
  TextContent,
  MemeGeneratorForm,
  CustomLabel,
  CustomInput,
  CustomSelect,
  CustomOption,
  GenerateButton,
} from "./styledComponents"

const fontSizesOptionsList = [
  {
    optionId: "8",
    displayText: "8",
  },
  {
    optionId: "12",
    displayText: "12",
  },
  {
    optionId: "16",
    displayText: "16",
  },
  {
    optionId: "20",
    displayText: "20",
  },
  {
    optionId: "24",
    displayText: "24",
  },
  {
    optionId: "28",
    displayText: "28",
  },
  {
    optionId: "32",
    displayText: "32",
  },
]

class MemeGenerator extends Component {
  state = {
    backgroundImageUrlInput: "",
    topTextInput: "",
    bottomTextInput: "",
    activeFontSizeOptionId: fontSizesOptionsList[0].optionId,
    backgroundImageUrl: "",
    topText: "",
    bottomText: "",
    activeFontSizeId: "",
  }

  onChangeBackgroundImage = (event) => {
    this.setState({ backgroundImageUrlInput: event.target.value })
  }

  onChangeTopTextInput = (event) => {
    this.setState({ topTextInput: event.target.value })
  }

  onChangeBottomTextInput = (event) => {
    this.setState({ bottomTextInput: event.target.value })
  }

  onChangeFontSizeOptionID = (event) => {
    this.setState({ activeFontSizeOptionId: event.target.value })
  }

  onGenerateMeme = (event) => {
    event.preventDefault()
    const {
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
      activeFontSizeOptionId,
    } = this.state

    this.setState({
      backgroundImageUrl: backgroundImageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      activeFontSizeId: activeFontSizeOptionId,
    })
  }

  renderMeme = () => {
    const { backgroundImageUrl, topText, bottomText, activeFontSizeId } =
      this.state

    return (
      <MemeContainer data-testid="meme" backgroundImage={backgroundImageUrl}>
        <TextContent activeFontSizeId={activeFontSizeId}>{topText}</TextContent>
        <TextContent activeFontSizeId={activeFontSizeId}>
          {bottomText}
        </TextContent>
      </MemeContainer>
    )
  }

  renderMemeGeneratorForm = () => {
    const {
      activeFontSizeOptionId,
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
    } = this.state
    return (
      <MemeGeneratorForm onSubmit={this.onGenerateMeme}>
        <CustomLabel htmlFor="backgroundImageUrl">Image URL</CustomLabel>
        <CustomInput
          type="text"
          id="backgroundImageUrl"
          value={backgroundImageUrlInput}
          onChange={this.onChangeBackgroundImage}
          placeholder="Enter the Image URL"
        />
        <CustomLabel htmlFor="topText">Top Text</CustomLabel>
        <CustomInput
          type="text"
          id="topText"
          value={topTextInput}
          onChange={this.onChangeTopTextInput}
          placeholder="Enter the Top Text"
        />
        <CustomLabel htmlFor="topText">Bottom Text</CustomLabel>
        <CustomInput
          type="text"
          id="bottomText"
          value={bottomTextInput}
          onChange={this.onChangeBottomTextInput}
          placeholder="Enter the Bottom Text"
        />
        <CustomLabel htmlFor="select">Font Size</CustomLabel>
        <CustomSelect
          id="select"
          value={activeFontSizeOptionId}
          onChange={this.onChangeFontSizeOptionID}
        >
          {fontSizesOptionsList.map((eachOption) => (
            <CustomOption key={eachOption.optionId} value={eachOption.optionId}>
              {eachOption.displayText}
            </CustomOption>
          ))}
        </CustomSelect>
        <GenerateButton type="submit">Generate</GenerateButton>
      </MemeGeneratorForm>
    )
  }

  render() {
    return (
      <AppContainer>
        <MemeGeneratorContainer>
          <Heading>Meme Generator</Heading>
          <FormAndMemeContainer>
            {this.renderMeme()}
            {this.renderMemeGeneratorForm()}
          </FormAndMemeContainer>
        </MemeGeneratorContainer>
      </AppContainer>
    )
  }
}
export default MemeGenerator
