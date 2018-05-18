import Reflux from "reflux";
// import Actions from "./../action.js";

class RawTextStore extends Reflux.Store {
  constructor(props) {
    super(props);
    this.state = {
      poem: [
        {
          text:
            "I think night time is dark so you can imagine your fears with less distraction. I suppose if we couldn’t laugh at things that don’t make sense, we couldn’t react to a lot of life. Life is full of surprises, but never when you need one.",
          blackout: [{ st: 3, ed: 7 }, { st: 9, ed: 11 }, { st: 15, ed: 17 }]
        },
        {
          text: "",
          blackout: [{ st: 3, ed: 9 }, { st: 10, ed: 23 }]
        },
        {
          text: "",
          blackout: [{ st: 2, ed: 6 }, { st: 11, ed: 21 }]
        }
      ],
      should_blackout: true
    };
  }
}

export default RawTextStore;
