import React from "react";
import { useStateRef } from "../../state";
import styled from "styled-components";

const CardDiv = styled.div`
  font-size: 1rem;
  background: var(--bgElevated);
  margin: 40px;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.1);
  width: 520px;
  height: auto;
  position: relative;
  zindex: 2;
`;

const CardIcon = styled.div`
  position: absolute;
  left: -20px;
  top: 34px;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
  color: #ffffff;
  text-align: center;
  line-height: 40px;
  font-size: 20px;
  z-index: 10;
  background-color: ${props => "var(--" + props.color + ")"};
`;

const CardSubTitle = styled.h4`
  color: ${props => "var(--" + props.color + ")"};
  text-transform: uppercase;
`;

const CardTagline = styled.h4`
  color: var(--textSecondary);
`;

const Card = ({ project }) => {
  const [state, dispatch] = useStateRef();

  const { id, title, subtitle, date, tags, icon } = project;

  let allTags = [];
  state.info[0].tags.forEach(tag =>
    tag.name !== "other" ? allTags.push(tag.name) : null
  );

  function matchColor(tags) {
    for (var i = 0; i < tags.length; i++) {
      tags[i] = tags[i].toLowerCase();
    }
    let matches = allTags.filter(x => tags.includes(x));
    if (matches[0] && matches[0] !== "") {
      return findInfoOBJ("name", matches[0]).color;
    } else {
      return findInfoOBJ("name", "other").color;
    }
  }

  function matchIcon(tags) {
    for (var i = 0; i < tags.length; i++) {
      tags[i] = tags[i].toLowerCase();
    }
    let matches = allTags.filter(x => tags.includes(x));
    if (matches[0] && matches[0] !== "") {
      return findInfoOBJ("name", matches[0]).icon;
    } else {
      return findInfoOBJ("name", "other").icon;
    }
  }

  function findInfoOBJ(key, val) {
    return state.info[0].tags.find(obj => obj[key] === val);
  }

  const accentColor = matchColor(tags);

  return (
    <CardDiv id={id} className="card">
      <CardIcon color={accentColor}>
        <i className={icon || matchIcon(tags)} />
      </CardIcon>
      <div className="heading">
        <h1>{title}</h1>
        <CardSubTitle color={accentColor}>{subtitle}</CardSubTitle>
        <CardTagline>
          {date ? `${date} •` : ""}{" "}
          {tags.map((tag, index) => (
            <span key={tag}>
              {tag.toString() + `${index < tags.length - 1 ? ", " : " "}`}
            </span>
          ))}
        </CardTagline>
      </div>
    </CardDiv>
  );
};

export default Card;
