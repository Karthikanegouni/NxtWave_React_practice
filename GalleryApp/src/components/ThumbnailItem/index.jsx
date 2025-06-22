import "./index.css";

const ThumbnailItem = (props) => {
  const { imagesDetails, updateActiveImg, isActiveItem } = props;
  const { thumbnailUrl, thumbnailAltText, id } = imagesDetails;
  const activeItemClassName = isActiveItem ? "active-thumbnail-item" : "";

  const setActive = () => {
    updateActiveImg(id);
  };

  return (
    <li className='thumbnail-item'>
      <button onClick={setActive}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail-img ${activeItemClassName}`}
        />
      </button>
    </li>
  );
};

export default ThumbnailItem;