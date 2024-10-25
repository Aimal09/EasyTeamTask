import { Actions } from "./Actions";

export const Reducer = (state, action) => {
  const { token, employee, employees } = action.payload;
  return { ...state, user:employee, token, employees }
};