import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
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
  state = {
    commentsList: [],
    nameInput: "",
    commentInput: "",
  };

  updateNameInput = (event) => {
    this.setState({
      nameInput: event.target.value,
    });
  };
  updateCommentInput = (event) => {
    this.setState({
      commentInput: event.target.value,
    });
  };

  submitComment = (event) => {
    event.preventDefault();
    const { nameInput, commentInput, commentsList } = this.state;
    if (nameInput.trim() === "" || commentInput.trim() === "") {
      return;
    }
    const index = commentsList.length % 7;
    const formData = {
      id: uuidv4(),
      name: nameInput,
      comment: commentInput,
      date: new Date(),
      isLiked: false,
      userColor: initialContainerBackgroundClassNames[index],
    };
    this.setState((prevState) => ({
      commentsList: [...prevState.commentsList, formData],
      nameInput: "",
      commentInput: "",
    }));
  };

  updateLike = (id) => {
    this.setState((prevState) => {
      const updatedList = prevState.commentsList.map((eachItem) => {
        if (id === eachItem.id) {
          return { ...eachItem, isLiked: !eachItem.isLiked };
        }
        return eachItem;
      });

      return {
        commentsList: updatedList,
      };
    });
  };

  deleteComment = (id) => {
    this.setState((prevState) => ({
      commentsList: prevState.commentsList.filter(
        (comment) => comment.id !== id
      ),
    }));
  };

  render() {
    const { commentsList, nameInput, commentInput } = this.state;
    const commentsCount = commentsList.length;
    return (
      <div className="wrapper">
        <h1 className="title">Comments</h1>
        <div className="main-cnt">
          <form
            type="submit"
            className="left-cnt"
            onSubmit={this.submitComment}
          >
            <p className="text">Say something about 4.0 Technologies</p>
            <input
              type="text"
              className="name-input"
              placeholder="Your Name"
              value={nameInput}
              onChange={this.updateNameInput}
            />
            <textarea
              name="comment"
              className="comment-textarea"
              placeholder="Your Comment"
              rows="4"
              value={commentInput}
              onChange={this.updateCommentInput}
            ></textarea>

            <button type="submit" className="add-comment-btn">
              Add Comment
            </button>
          </form>
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
          <p className="count-text">
            <span className="count">{commentsCount}</span> Comments
          </p>
          <ul className="comment-item-cnt">
            {commentsList.map((comment) => (
              <CommentItem
                commentDetails={comment}
                key={comment.id}
                updateLike={this.updateLike}
                deleteComment={this.deleteComment}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Comments;
