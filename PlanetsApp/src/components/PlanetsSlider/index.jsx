import Slider from "react-slick"
import PlanetItem from "../PlanetItem"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./index.css"

const settings = {
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const PlanetsSlider = ({ planetsList }) => (
  <>
    <div className="main-container">
      <h1 className="main-heading">PLANETS</h1>
      <div className="slider-container" data-testid="planets">
        <Slider {...settings}>
          {planetsList.map((planet) => (
            <PlanetItem key={planet.id} planet={planet} />
          ))}
        </Slider>
      </div>
    </div>
  </>
)

export default PlanetsSlider
