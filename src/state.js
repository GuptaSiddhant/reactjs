import React, { createContext, useContext, useReducer } from "react";
import { setRootCSS } from "./app/theme";

const initState = {
  theme: "light",
  info: {},
  projects: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "themeSwitch":
      setRootCSS(action.payload);
      return { ...state, theme: action.payload };
    case "fetchNewProject":
      return { ...state, projects: action.payload };
    case "updateInfo":
      return { ...state, info: action.payload };
    default:
      return state;
  }
};

const localState = JSON.parse(localStorage.getItem("state"));

export const StateContext = createContext();
export const useStateRef = () => useContext(StateContext);
export const StateProvider = ({ children }) => (
  <StateContext.Provider value={useReducer(reducer, localState || initState)}>
    {children}
  </StateContext.Provider>
);
