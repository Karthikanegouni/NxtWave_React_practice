import { Switch, Route } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Login from "./components/Login"
import NotFound from "./components/NotFound"
import ProtectedRoute from "./components/ProtectedRoute"

import "./App.css"

const App = () => (
  <>
    <Switch>
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
