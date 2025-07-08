import { Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

import "./App.css";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

const App = () => (
  <div className="app-container">
    <BrowserRouter>
      <div className="responsive-container">
        <Header />
        <div className="app-body">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  </div>
);

export default App;
