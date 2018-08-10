import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import reducer from "./reducers/reducer.js";
import addTableItem from "./actions/addTableItem.js";
import deleteTableItem from "./actions/deleteTableItem.js";
import incrementMoneyEarned from "./actions/incrementMoneyEarned.js";
import selectTable from "./actions/selectTable.js";
import toggleTable from "./actions/toggleTable.js";

var store = createStore(reducer);

const getSelectedTable = () => {
  var state = store.getState();
  return state.selectedTable;
};

const getAvailableTables = () => {
  var state = store.getState();
  var tablesAvailable = 0;

  for (let i = 0; i < state.tableStatusData.length; i++) {
    if (state.tableStatusData[i] === true) tablesAvailable++;
  }
  return tablesAvailable;
};
const getTableStatusData = () => {
  var state = store.getState();
  return state.tableStatusData;
};

const getTableItems = () => {
  var state = store.getState();

  if (getSelectedTable() === null) var tableItems = [];
  else var tableItems = state.tableData[getSelectedTable()];
  return tableItems;
};

const getTotalBill = () => {
  var tableItems = getTableItems();
  var totalBill = 0;
  for (let i = 0; i < tableItems.length; i++) {
    totalBill += tableItems[i].price;
  }
  return totalBill;
};

const getMoneyEarned = () => {
  var state = store.getState();
  return state.moneyEarned;
};

const checkOut = () => {
  var totalBill = getTotalBill();
  store.dispatch(incrementMoneyEarned(totalBill));
  store.dispatch(toggleTable(getSelectedTable()));
};

store.subscribe(() => {
  console.log(`Selected Table: ${getSelectedTable()}`);
  console.log(`Tables Available: ${getAvailableTables()} / 16`);
  console.log(`Table Availability Status: ${getTableStatusData()}`);
  console.log(`Selected Table Items List:`, getTableItems());
  console.log(`Selected Table Bill: $${getTotalBill()}`);
  console.log(`Total Money Earned: $${getMoneyEarned()}`);
  console.log();
});

//test dispatched actions

//select and toggle table 0, add items
//select and toggle table 1, add items
//check out current selected table
//select table 0
store.dispatch(selectTable(0));
store.dispatch(toggleTable(0));
store.dispatch(addTableItem("apples", 2, 0));
store.dispatch(addTableItem("bananas", 3, 0));
store.dispatch(deleteTableItem(0 , 1));

store.dispatch(selectTable(1));
store.dispatch(toggleTable(1));
store.dispatch(addTableItem("apples", 2, 1));
store.dispatch(addTableItem("bananas", 3, 1));
store.dispatch(addTableItem("carrots", 4, 1));
checkOut();
store.dispatch(selectTable(0));

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);