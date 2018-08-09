import { INCREMENT_MONEY_EARNED } from "../constants/constants.js";

const moneyEarned = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_MONEY_EARNED:
      return state + action.amount;
    default:
      return state;
  }
};

export default moneyEarned;