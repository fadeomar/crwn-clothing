import { SET_USER_REDUCER } from "./Types";

export const setCurrentUser = (user) => ({
  type: SET_USER_REDUCER,
  payload: user,
});
