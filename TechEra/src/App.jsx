import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './components/Home'
import CourseItemDetailed from './components/CourseItemDetailed'
import NotFound from './components/NotFound'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/courses/:id" component={CourseItemDetailed} />
    <Route exact path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
