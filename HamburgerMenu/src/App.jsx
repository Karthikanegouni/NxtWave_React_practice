import { Switch, Route } from "react-router-dom"
import "./App.css"
import Home from "./components/Home"
import About from "./components/About"
import NotFound from "./components/NotFound"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min"

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
