import React, { useEffect, useState } from "react";
import { useStateRef } from "../state";
import Card from "../components/molecules/card";
import firebase from "../firebase";

const HomePage = ({ children }) => {
  const [state, dispatch] = useStateRef();

  useEffect(() => {
    const unsuscribe = firebase
      .firestore()
      .collection("projects")
      .orderBy("timestamp", "desc")
      .onSnapshot(snapshot => {
        const newProject = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        dispatch({ type: "fetchNewProject", payload: newProject });
      });
    return () => unsuscribe();
  }, []);

  return (
    <div id="projectList">
      {state.projects.map(project => (
        <Card key={project.id} project={project} />
      ))}
    </div>
  );
};

export default HomePage;
