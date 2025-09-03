import "./index.css"

const PlanetItem = ({ planet }) => {
  const { imageUrl, name, description } = planet
  return (
    <div className="slider-item">
      <img src={imageUrl} alt={`planet ${name}`} className="planet-img" />
      <h1 className="planet-name">{name}</h1>
      <p className="planet-description">{description}</p>
    </div>
  )
}

export default PlanetItem
