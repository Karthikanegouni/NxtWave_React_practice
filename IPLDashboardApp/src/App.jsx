import { Switch, Route } from "react-router-dom"
import Home from "./components/Home"
import TeamMatches from "./components/TeamMatches"
import NotFound from "./components/NotFound"
import "./App.css"

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/team-matches/:id" component={TeamMatches} />
      <Route component={NotFound} />
    </Switch>
  )
}