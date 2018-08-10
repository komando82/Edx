import { combineReducers } from "redux";

import selectedTable from "./selectedTable.js";
import tableStatusData from "./tableStatusData.js";
import tableData from "./tableData.js";
import moneyEarned from "./moneyEarned.js";

const reducer = combineReducers({
  selectedTable,
  tableStatusData,
  tableData,
  moneyEarned
});

export default reducer;