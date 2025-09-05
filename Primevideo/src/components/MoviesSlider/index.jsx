import Slider from "react-slick"
import MovieItem from "../MovieItem"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const MoviesSlider = ({ moviesList }) => {
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <div>
      <Slider {...settings} className="slider">
        {moviesList.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
