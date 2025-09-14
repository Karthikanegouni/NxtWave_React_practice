import { Switch, Route } from "react-router-dom"
import Home from "./components/Home"
import NotFound from "./components/NotFound"
import Navbar from "./components/Navbar"
import About from "./components/About"
import { ThemeProvider } from "./context/ThemeContext.jsx"

import "./App.css"

const App = () => {
  return (
    <>
      <ThemeProvider>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </ThemeProvider>
    </>
  )
}

export default App
