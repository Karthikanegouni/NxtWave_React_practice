import Popup from "reactjs-popup"
import ReactPlayer from "react-player"
import { IoMdClose } from "react-icons/io"
import "./index.css"

const MovieItem = ({ movie }) => {
  const { thumbnailUrl, videoUrl } = movie

  return (
    <div>
      <Popup
        trigger={
          <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
        }
        modal
        className="popup-content"
      >
        {(close) => (
          <>
            <button
              onClick={() => close()}
              type="button"
              data-testid="closeButton"
              className="close-btn"
            >
              <IoMdClose size={30} />
            </button>
            <ReactPlayer
              src={videoUrl}
              width="90%"
              height="90%"
              controls
              className="player"
            />
          </>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
