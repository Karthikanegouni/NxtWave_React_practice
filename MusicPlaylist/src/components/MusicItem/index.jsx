import { BsTrash } from 'react-icons/bs'
import './index.css'

const MusicItem = ({ songData, handleDelete }) => {
  const { id, name, imageUrl, genre, duration } = songData
  return (
    <li>
      <div className="song-details">
        <img src={imageUrl} alt="track" />
        <div>
          <p className='title'>{name}</p>
          <p className='genre'>{genre}</p>
        </div>
      </div>
      <div className="duration-delete-cnt">
        <p>{duration}</p>
        <button
          type="button"
          data-testid="delete"
          className="delete-btn"
          onClick={() => {
            handleDelete(id)
          }}
        >
          <BsTrash />
        </button>
      </div>
    </li>
  )
}

export default MusicItem
