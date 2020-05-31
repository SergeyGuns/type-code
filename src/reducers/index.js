import { combineReducers } from "@reduxjs/toolkit";
import { createStore } from "redux";
import { SET_ACTIVE_FILE, SET_FILES } from "../constants";
import start1 from "../tmp-projects/start-1.json";

const initialState = {
  activeFile: null,
  files: start1,
};

const appReducer = (state = initialState, action) => {
  const cases = {
    [SET_FILES]: (state, { payload }) => ({ ...state, ...payload }),
    [SET_ACTIVE_FILE]: (state, { payload: file }) => ({
      ...state,
      activeFile: file,
    }),
  };
  return cases[action.type] ? cases[action.type](state, action) : state;
};

const rootReducer = combineReducers({
  app: appReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
