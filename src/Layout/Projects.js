import React from "react";
import styles from "./Projects.module.css";
import { Typography } from "antd";
import project from "../utils/project.json";
import Project from "../components/Project/Project";

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
            key={item.title}
            title={item.title}
            desc={item.desc}
            image={item.img}
            tech={item.tech}
          ></Project>
        ))}
      </div>
    </div>
  );
}
