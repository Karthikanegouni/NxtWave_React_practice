import { Component } from "react";
import "./index.css";

class Feedback extends Component {
  state = {
    submitted: false,
  };

  onSubmit = () => {
    this.setState({ submitted: true });
  };

  render() {
    const { submitted } = this.state;
    const {resources} = this.props
    const { emojis, loveEmojiUrl } = resources;

    return (
      <div className="background">
        {submitted ? (
          <div className="card">
            <img src={loveEmojiUrl} alt="love emoji" className="emoji" />
            <h1 className="title">Thank You!</h1>
            <p className="info">
              We will use your feedback to improve our customer support performance.
            </p>
          </div>
        ) : (
          <div className="card">
            <h1 className="title">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="emojis-cnt">
              {emojis.map((emoji) => (
                <li key={emoji.id}>
                  <img
                    src={emoji.imageUrl}
                    alt={emoji.name}
                    className="emoji"
                    onClick={this.onSubmit}
                  />
                  <p className="info">{emoji.name}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}


export default Feedback;
