import MoviesSlider from "../MoviesSlider"
import "./index.css"

const Primevideo = ({ moviesList }) => {
  const actionMovies = moviesList.filter(
    (movie) => movie.categoryId === "ACTION"
  )

  const comedyMovies = moviesList.filter(
    (movie) => movie.categoryId === "COMEDY"
  )
  return (
    <div className="prime-video-cnt">
      <div className="top-banner">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="banner-img"
        />
      </div>
      <div className="movies-cnt">
        <h1>Action Movies</h1>
        <MoviesSlider moviesList={actionMovies} />

        <h1>Comedy Movies</h1>
        <MoviesSlider moviesList={comedyMovies} />
      </div>
    </div>
  )
}

export default Primevideo
