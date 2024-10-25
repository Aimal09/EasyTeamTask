import { Actions } from "./Actions";

export const Reducer = (state, action) => {
  const { token, user, employees } = action.payload;
  return { ...state, user, token, employees }
};