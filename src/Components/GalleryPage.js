import React from "react";
import Reflux from "reflux";
import RawTextStore from "./../Stores/RawTextStore.js";

class GalleryPage extends Reflux.Component {
  constructor(props) {
    super(props);
    this.store = RawTextStore;
  }

  render() {
    return <div>gallery of poems here</div>;
  }
}

export default GalleryPage;
