import { SET_FILES, SET_ACTIVE_FILE } from "../constants";

export const setFiles = (files) => {
  return {
    type: SET_FILES,
    payload: {
      files,
    },
  };
};

export const setActiveFile = (file) => ({
  type: SET_ACTIVE_FILE,
  payload: file,
});
