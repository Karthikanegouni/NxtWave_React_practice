import "./index.css";

const Denomination = (props) => {
  const { item, onDenomination } = props;
  const { value } = item;

  const handleClick = () => {
    onDenomination(value);
  };

  return (
    <li>
      <button className="button" onClick={handleClick}>
        {value}
      </button>
    </li>
  );
};

export default Denomination;
