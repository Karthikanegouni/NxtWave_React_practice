import "./index.css";

const DestinationItem = (props) => {
  const { destinationItem } = props;
  const { name, imgUrl } = destinationItem;
  return (
    <li className="destination-item-card">
      <img src={imgUrl} alt={name} />
      <p>{name}</p>
    </li>
  );
};

export default DestinationItem;
