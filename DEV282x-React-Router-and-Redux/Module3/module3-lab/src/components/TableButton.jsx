import React from "react";

const TableButton = props => {
  var style = {
    width: 80,
    height: 80,
    margin: 25,
    border: props.selectedTable === props.id ? "1px solid blue" : null,
    backgroundColor: props.tableStatusData[props.id] ? "red" : null
  };
  return (
    <div>
      <button onClick={() => props.onSelect(props.id)} style={style}>
        {props.id}
      </button>
    </div>
  );
};

export default TableButton;
