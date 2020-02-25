import React from "react";
import styles from "./Projects.module.css";
import { Typography } from "antd";
import project from "../utils/project.json";
import Project from "../components/Project/Project";
import html1 from "../assets/projects/html-1.png";
import html2 from "../assets/projects/html-2.png";
import html3 from "../assets/projects/html-3.png";
import javascript1 from "../assets/projects/javascript-1.png";
import javascript2 from "../assets/projects/javascript-3.png";
import javascript3 from "../assets/projects/javascript-4.png";
import css from "../assets/projects/scaffold.png";
import react1 from "../assets/projects/react-1.png";
import react2 from "../assets/projects/react-2.png";

const { Title } = Typography;

export default function Projects() {
  return (
    <div className={styles.Projects}>
      <p className={styles.quotes}>
        “It does not take much strength to do things, but it requires a great
        deal of strength to decide what to do.” ― Elbert Hubbard
      </p>
      <Title level={3}>My Work</Title>
      <div className={styles.project}>
        {project.map(item => (
          <Project
            title={item.title}
            desc={item.desc}
            image={item.image}
            tech={item.tech}
          ></Project>
        ))}
      </div>
    </div>
  );
}
