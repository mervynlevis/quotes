import Home from "./components/Home/Home";
import Kanye from "./components/Kanye/Kanye";
import Swanson from "./components/Swanson/Swanson";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Home/Navigation";

function App() {
  return (
    <div className="App">
      <Router>
      <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/kanye">
            <Kanye />
          </Route>
          <Route path="/swanson">
            <Swanson />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
