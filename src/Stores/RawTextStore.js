import Reflux from "reflux";
import Actions from "./../action.js";

class RawTextStore extends Reflux.Store {
  constructor(props) {
    super(props);
    this.state = {
      poem: [
        {
          text:
            "I think night time is dark so you can imagine your fears with less distraction. I suppose if we couldn’t laugh at things that don’t make sense, we couldn’t react to a lot of life. Life is full of surprises, but never when you need one.",
          blackout_index: []
        }
      ],
      should_blackout: true
    };
    this.listenTo(Actions.saveRange, this.onSaveRange);
  }

  // { startOffset, endOffset }
  onSaveRange(startOffset, endOffset, text, data) {
    var newPoem = this.state.poem;
    newPoem[0].blackout_index.push({
      start: startOffset,
      end: endOffset,
      text: text,
      data: data
    });
    this.setState({ poem: newPoem });
  }
}

export default RawTextStore;

// { st: 12, ed: 23 },
// { st: 0, ed: 6 },
// { st: 89, ed: 100 },
// { st: 120, ed: 140 },
// { st: 160, ed: 200 }

// "I think night time is dark so you can imagine your fears with less distraction. I suppose if we couldn’t laugh at things that don’t make sense, we couldn’t react to a lot of life. Life is full of surprises, but never when you need one.",
