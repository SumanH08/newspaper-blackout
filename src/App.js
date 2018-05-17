import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom";
import HomePage from "./Components/HomePage.js";
import AboutPage from "./Components/AboutPage.js";
import GalleryPage from "./Components/GalleryPage.js";
import NewPoemPage from "./Components/NewPoemPage.js";
import PoemPage from "./Components/PoemPage.js";
import NavMenu from "./Components/NavMenu.js";
import NotFoundPage from "./Components/NotFoundPage.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavMenu />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/gallery" component={GalleryPage} />
            <Route exact path="/new" component={NewPoemPage} />
            <Route exact path="/poem/:poem_id" component={PoemPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
