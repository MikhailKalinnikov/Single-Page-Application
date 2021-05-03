import initState from "./initState";
import { GET_ITEMS } from "./Types";

const Reducer = (state = initState(), action) => {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
};

export default Reducer;
