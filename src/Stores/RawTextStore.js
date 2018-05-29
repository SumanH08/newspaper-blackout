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

  onSaveRange(startOffset, endOffset) {
    var tempArr = this.state.poem;
    var tempArr2 = tempArr[0].blackout_index;
    tempArr2.push({ startOffset: startOffset, endOffset: endOffset });
    this.setState({ blackout_index: tempArr2 });
    console.log(this.state.poem[0].blackout_index);
  }
}

export default RawTextStore;

// {
//   text:
//     "I just have a command of thoroughly useless information. There's no problem so awful, that you can't add some guilt to it and make it even worse",
//   blackout_index: [{ st: 0, ed: 125 }, { st: 131, ed: 150 }]
// },
// {
//   text:
//     "I'm killing time while I wait for life to shower me with meaning and happiness.",
//   blackout_index: [
//     { st: 0, ed: 49 },
//     { st: 51, ed: 72 },
//     { st: 76, ed: 80 }
//   ]
// }
