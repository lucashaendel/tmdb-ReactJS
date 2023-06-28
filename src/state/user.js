import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};
export const setUser = createAction("SET_USER");
export const reducer = createReducer(initialState, {
  [setUser]: (state, action) => (state = { value: action.payload }),
});
