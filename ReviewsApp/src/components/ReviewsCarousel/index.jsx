import { Component } from "react";
import "./index.css";

class ReviewsCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
    this.length = props.reviewsList.length;
  }

  handleLeft = () => {
    const { currentIndex } = this.state;
    if (currentIndex > 0) {
      this.setState((prev) => ({
        currentIndex: prev.currentIndex - 1,
      }));
    }
  };

  handleRight = () => {
    const { currentIndex } = this.state;
    const { length } = this;
    if (currentIndex < length - 1) {
      this.setState((prev) => ({
        currentIndex: prev.currentIndex + 1,
      }));
    }
  };

  render() {
    const { currentIndex } = this.state;
    const { reviewsList } = this.props;
    const { imgUrl, username, companyName, description } =
      reviewsList[currentIndex];
    return (
      <div className="bg-cnt">
        <div className="review-card">
          <button
            type="button"
            className="left"
            onClick={this.handleLeft}
            disabled={currentIndex === 0}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="prev-arrow"
            />
          </button>
          <div className="review-cnt">
            <h1 className="title">Reviews</h1>
            <img src={imgUrl} alt={username} className="user-img" />
            <p className="user-name">{username}</p>
            <p className="user-company">{companyName}</p>
            <p className="user-review">{description}</p>
          </div>
          <button
            type="button"
            className="right"
            onClick={this.handleRight}
            disabled={currentIndex === this.length - 1}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="next-arrow"
            />
          </button>
        </div>
      </div>
    );
  }
}

export default ReviewsCarousel;
