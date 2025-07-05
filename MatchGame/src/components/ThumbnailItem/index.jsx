import "./index.css";

export default function ThumbnailItem({ thumbnailItem,onSelectedThumbnail}) {
  const {id,thumbnailUrl } = thumbnailItem;

  const selectThumbnail=()=>{
    onSelectedThumbnail(id)
  }

  return (
    <li className="thumbnail-cnt">
      <button type="button" onClick={selectThumbnail} className="thumbnail-btn">
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
      </button>
    </li>
  );
}
