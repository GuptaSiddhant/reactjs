import React, { useEffect } from "react";
import { useStateRef } from "../state";
import "./App.css";
import firebase from "../firebase";

import { setRootCSS } from "./theme";
import HomePage from "../pages/homepage";
import Button from "../components/atoms/button";
// import Add from "../components/atoms/add";

function App() {
  const [state, dispatch] = useStateRef();
  setRootCSS(state.theme);

  useEffect(() => {
    const unsuscribe = firebase
      .firestore()
      .collection("info")
      .onSnapshot(snapshot => {
        const newInfo = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        dispatch({ type: "updateInfo", payload: newInfo });
      });
    return () => unsuscribe();
  }, []);

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  return (
    <div id="App">
      <Button />
      {/* <Add /> */}
      <HomePage />
    </div>
  );
}

export default App;
