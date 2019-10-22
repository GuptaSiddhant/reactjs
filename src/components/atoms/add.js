import React from "react";
import firebase from "../../firebase";

const Add = ({ children }) => {
  const info = {
    title: "Gupta Siddhant",
    description: "Personal website of Gupta Siddhant",
    tags: [
      {
        name: "about",
        color: "purple",
        icon: "fas fa-info",
        code: "Digit1"
      },
      {
        name: "projects",
        color: "green",
        icon: "fas fa-palette",
        code: "Digit2"
      },
      {
        name: "experience",
        color: "red",
        icon: "fas fa-briefcase",
        code: "Digit3"
      },
      {
        name: "education",
        color: "blue",
        icon: "fas fa-graduation-cap",
        code: "Digit4"
      },
      {
        name: "blog",
        color: "orange",
        icon: "fas fa-feather-alt",
        code: "Digit5"
      },
      {
        name: "starred",
        color: "yellow",
        icon: "fas fa-star",
        code: "Digit6"
      },
      {
        name: "other",
        color: "textDisabled",
        icon: "fas fa-history",
        code: "Digit0"
      }
    ],
    social: [
      {
        name: "LinkedIn",
        icon: "fab fa-linkedin",
        link: "https://www.linkedin.com/in/guptasiddhant9/",
        color: "#0077B5"
      },
      {
        name: "GitHub",
        icon: "fab fa-github",
        link: "https://www.github.com/guptasiddhant/",
        color: "#000000"
      },
      {
        name: "Mail",
        icon: "fas fa-envelope",
        link: "mailto:me@guptasiddhant.com",
        color: "#78af26"
      }
    ]
  };

  return (
    <button
      onClick={e => {
        e.preventDefault();
        firebase
          .firestore()
          .collection("info")
          .doc("info")
          .set(info)
          .then(() => {
            console.log(info);
          });
      }}
    >
      Add tag {children}
    </button>
  );
};

export default Add;
