import React from "react";

const ToggleTable = props => {
  return (
    <div>
      <button
        disabled={props.selectedTable === null}
        onClick={() => props.onToggle(props.selectedTable, props.tableData)}
      >
        {props.tableStatus ? "Check Out" : "Check In"}
      </button>
    </div>
  );
};

export default ToggleTable;
