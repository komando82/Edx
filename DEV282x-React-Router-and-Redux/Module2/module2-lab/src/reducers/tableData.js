import {
  ADD_TABLE_ITEM,
  DELETE_TABLE_ITEM,
  TOGGLE_TABLE
} from "../constants/constants.js";

var initialTableData = [];

for (let i = 0; i < 16; i++) {
  initialTableData.push([]);
}

const tableData = (state = initialTableData, action) => {
  switch (action.type) {
    case ADD_TABLE_ITEM:
      var stateCopy = [];
      for (let i = 0; i < 16; i++) {
        stateCopy.push(state[i].slice());
      }
      stateCopy[action.tableId].push(action.item);
      return stateCopy;
    case DELETE_TABLE_ITEM:
      var stateCopy = [];
      for (let i = 0; i < 16; i++) {
        stateCopy.push(state[i].slice());
      }
      stateCopy[action.tableId].splice(action.id, 1);
      return stateCopy;
    case TOGGLE_TABLE:
      var stateCopy = [];
      for (let i = 0; i < 16; i++) {
        stateCopy.push(state[i].slice());
      }
      stateCopy[action.id] = [];
      return stateCopy;
    default:
      return state;
  }
};

export default tableData;