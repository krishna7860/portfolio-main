import React from "react";
import styles from "./Tools.module.css";
import npm from "../../assets/npm.svg";
import github from "../../assets/github.svg";
import postman from "../../assets/postman.svg";
import netlify from "../../assets/netlify.svg";
export default function Tools() {
  return (
    <div className={styles.tech}>
      <div>
        <img src={npm}></img>
        <span>NPM</span>
      </div>
      <div>
        <img src={github}></img>
        <span>Github</span>
      </div>
      <div>
        <img src={postman}></img>
        <span>Postman</span>
      </div>
      <div>
        <img src={netlify}></img>
        <span>Netlify</span>
      </div>
    </div>
  );
}
