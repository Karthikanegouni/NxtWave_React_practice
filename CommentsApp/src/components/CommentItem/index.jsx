import { formatDistanceToNow } from "date-fns";
import "./index.css";

const CommentItem = (props) => {
  const { commentDetails, updateLike, deleteComment } = props;
  const { id, name, comment, date, isLiked, userColor } = commentDetails;
  const likedBtn = isLiked && "liked-btn";
  const likeImgUrl = isLiked
    ? "https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
    : "https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png";
  const timeDistance = formatDistanceToNow(date) + " ago";

  const likeupdate = () => {
    updateLike(id);
  };

  const onDelete = () => {
    deleteComment(id);
  };

  return (
    <li className="comment-item-cnt">
      <div className="comment-top-cnt">
        <div className={`user-logo ${userColor}`}>{name[0].toUpperCase()}</div>
        <div className="comment-text-cnt">
          <span className="user-and-time">
            <p className="user-name">{name}</p>
            <p className="time">{timeDistance}</p>
          </span>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="like-delete-cnt">
        <button className={`like-btn ${likedBtn}`} onClick={likeupdate}>
          <img src={likeImgUrl} alt="like" className="like" /> Like
        </button>
        <button className="del-btn" data-testid="delete" onClick={onDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="del"
          />
        </button>
      </div>
      <hr />
    </li>
  );
};
export default CommentItem;
