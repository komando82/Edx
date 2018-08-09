import { SELECT_TABLE } from "../constants/constants.js";

const selectedTable = (state = null, action) => {
  switch (action.type) {
    case SELECT_TABLE:
      if (state === action.id) return null;
      else return action.id;
    default:
      return state;
  }
};

export default selectedTable;