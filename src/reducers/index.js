import { createSlice, combineReducers } from "@reduxjs/toolkit";
import { createStore } from "redux";
import { SET_ACTIVE_FILE, SET_FILES } from "../constants";
const initialState = {
  activeFile: null,
  files: [
    {
      name: "src",
      isOpen: true,
      children: [
        {
          name: "index.js",
        },
        {
          name: "styles",
          isOpen: false,
          children: [{ name: "main.css" }],
        },
      ],
    },
    {
      name: "package.json",
    },
  ],
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
