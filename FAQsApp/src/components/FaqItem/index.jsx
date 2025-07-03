import {Component} from 'react'
import './index.css'

export default class FaqItem extends Component {
  state = {
    isAnswerVisible: false,
  }

  toggleAnswer = () => {
    this.setState(prevState => ({
      isAnswerVisible: !prevState.isAnswerVisible,
    }))
  }

  render() {
    const {faqDetails} = this.props
    const {questionText, answerText} = faqDetails
    const {isAnswerVisible} = this.state

    const buttonImgUrl = isAnswerVisible
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    return (
      <li className="faq-item">
        <div className="question-cnt">
          <h1 className="question">{questionText}</h1>
          <button
            className="show-hide-btn"
            type="button"
            onClick={this.toggleAnswer}
          >
            <img
              className="show-hide-img"
              src={buttonImgUrl}
              alt={isAnswerVisible ? 'minus' : 'plus'}
            />
          </button>
        </div>
        {isAnswerVisible && <p className="answer">{answerText}</p>}
      </li>
    )
  }
}
