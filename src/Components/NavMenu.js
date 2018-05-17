import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavMenu extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/new">New Poem</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/poem/123">Poem</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavMenu;

// 404 if No page
//do links here to navigate
