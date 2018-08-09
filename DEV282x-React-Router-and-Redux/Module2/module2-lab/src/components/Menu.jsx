import React from "react";
import OrderButtonContainer from "../containers/OrderButtonContainer.js";

const Menu = () => {
  var style = {
    display: "flex",
    flexWrap: "wrap",
    alignContent: "space-around",
    width: 160,
    height: 480,
    backgroundColor: "yellow"
  };
  return (
    <div style={style}>
      <OrderButtonContainer name="Burger" price={5} />
      <OrderButtonContainer name="Pizza" price={3} />
      <OrderButtonContainer name="Fries" price={1} />
      <OrderButtonContainer name="Water" price={0} />
      <OrderButtonContainer name="Donut" price={1} />
      <OrderButtonContainer name="Tea" price={1} />
      <OrderButtonContainer name="Pork" price={4} />
      <OrderButtonContainer name="Steak" price={7} />
      <OrderButtonContainer name="Milk" price={2} />
      <OrderButtonContainer name="Salad" price={3} />
      <OrderButtonContainer name="Fruit" price={2} />
      <OrderButtonContainer name="Eggs" price={1} />
    </div>
  );
};

export default Menu;
