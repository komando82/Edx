import React from "react";
import { NavLink } from "react-router-dom";

const NavTab = props => {
  var activeStyle = {
    color: "green",
    fontWeight: "bold"
  };

  var navStyle = {
    margin: "10px"
  };
  return (
    <NavLink style={navStyle} activeStyle={activeStyle} to={props.to}>
      {props.label}
    </NavLink>
  );
};

export default NavTab;