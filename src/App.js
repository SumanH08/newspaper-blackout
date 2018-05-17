import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import HomePage from "./Components/HomePage.js";
import AboutPage from "./Components/AboutPage.js";
import GalleryPage from "./Components/GalleryPage.js";
import NewPoemPage from "./Components/NewPoemPage.js";
import PoemPage from "./Components/PoemPage.js";
import NavMenu from "./Components/NavMenu.js";
import NotFoundPage from "./Components/NotFoundPage.js";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Container>
          <NavMenu />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/gallery" component={GalleryPage} />
            <Route path="/new" component={NewPoemPage} />
            <Route path="/poem/:poem_id" component={PoemPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
