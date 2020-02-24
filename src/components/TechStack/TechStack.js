import React from "react";
import styles from "./TechStack.module.css";
import html from "../../assets/html5.svg";
import css from "../../assets/css.svg";
import javascript from "../../assets/javascript.svg";
import nodejs from "../../assets/nodejs.svg";
import flask from "../../assets/flask.svg";
import python from "../../assets/python.svg";
import database from "../../assets/database.svg";
import react from "../../assets/react.svg";
import mongodb from "../../assets/mongodb.svg";
export default function TechStack() {
  return (
    <div className={styles.tech}>
      <div>
        <img src={html}></img>
        <span>HTML 5</span>
      </div>
      <div>
        <img src={css}></img>
        <span>CSS</span>
      </div>
      <div>
        <img src={javascript}></img>
        <span>Javascript</span>
      </div>
      <div>
        <img src={react}></img>
        <span>React JS</span>
      </div>
      <div>
        <img src={nodejs}></img>
        <span>NodeJS</span>
      </div>
      <div>
        <img src={mongodb}></img>
        <span>MongoDB</span>
      </div>
      <div>
        <img src={database}></img>
        <span>RDBMS</span>
      </div>
      <div>
        <img src={python}></img>
        <span>Python</span>
      </div>
      <div>
        <img src={flask}></img>
        <span>Flask</span>
      </div>
    </div>
  );
}
