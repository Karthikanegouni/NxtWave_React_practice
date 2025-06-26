import { Component } from "react";
import CommentItem from "../CommentItem";
import "./index.css";

const initialContainerBackgroundClassNames = [
  "amber",
  "blue",
  "orange",
  "emerald",
  "teal",
  "red",
  "light-blue",
];

class Comments extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="main-cnt">
          <div className="left-cnt">
            <h1 className="title">Comments</h1>
            <p className="text">Say something about 4.0 Technology</p>
            <div className="inputs-container">
              <input type="text" className="name-input" placeholder="Your Name" />
              <textarea
                name="comment"
                className="comment-textarea"
                placeholder="Your Comment"
                rows="10"
              ></textarea>
              <button className="add-comment-btn">Add Comment</button>
            </div>
          </div>
          <div className="right-cnt">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comments-logo"
            />
          </div>
        </div>
        <hr />
        <div className="comments-section">
          <p className="count-text"><span className="count">0</span> Comments</p>
        </div>
      </div>
    );
  }
}

export default Comments;
