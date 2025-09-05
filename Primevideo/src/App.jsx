import PrimeVideo from './components/PrimeVideo'
import './App.css'

const moviesList = [
  {
    id: '61227099e13958e58d31e74c',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/the-tomorrow-war-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=QPistcpGB8o',
    categoryId: 'ACTION',
  },
  {
    id: '612271842cad3c2dfcb82481',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/the-boss-baby-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=k397HRbTtWI&t=1s',
    categoryId: 'COMEDY',
  },
  {
    id: '6122709941329807a4e17b39',
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/avengers-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=eOrNdBpGMv8',
    categoryId: 'ACTION',
  },
  {
    id: '61227184c889cff17f05900b',
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/the-intern-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=ZU3Xban0Y6A',
    categoryId: 'COMEDY',
  },
  {
    id: '612271846f711783024f2bfa',
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/karwaan-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=IUCeN7kelXs',
    categoryId: 'COMEDY',
  },
  {
    id: '612271141bf93653809cdccb',
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/war-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=tQ0mzXRk-oM',
    categoryId: 'ACTION',
  },
  {
    id: '61227184c7ac22c8258938c5',
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/yes-man-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=dDh1l3qVNoY',
    categoryId: 'COMEDY',
  },
  {
    id: '61227184ae30e00e3ce542c8',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/isnt-it-romantic-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=YVYzxm_RqMg&t=9s',
    categoryId: 'COMEDY',
  },
  {
    id: '6122718418ae122e517c3ada',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/total-dhamaal-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=fo9EhcwQXcM',
    categoryId: 'COMEDY',
  },
  {
    id: '61227099ce46ed88e7f00c19',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/godzilla-vs-kong-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=odM92ap8_c0',
    categoryId: 'ACTION',
  },
  {
    id: '612271848b2be0f2f769d24a',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/welcome-to-newyork-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=lMAj8tyThw0',
    categoryId: 'COMEDY',
  },
  {
    id: '61227184882da0a972890152',
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/pagalpanti-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=3-7jehmURuM',
    categoryId: 'COMEDY',
  },
  {
    id: '6122709931ad5e69f5125806',
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/gamer-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=P2g94xQmtHw',
    categoryId: 'ACTION',
  },
  {
    id: '61227099d3c5b18801b2edb5',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/rule-of-the-law-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=xaPLUII_M6g',
    categoryId: 'ACTION',
  },
  {
    id: '61227114b7b5232771c68883',
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/priest-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=IYfdQOGqL1o',
    categoryId: 'ACTION',
  },
  {
    id: '61227099ea52349bd1e16ee4',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/ghost-protocal-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=EDGYVFZxsXQ',
    categoryId: 'ACTION',
  },
]

const App = () => <PrimeVideo moviesList={moviesList} />

export default App
