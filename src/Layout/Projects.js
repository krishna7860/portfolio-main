import React from "react";
import styles from "./Projects.module.css";
import { Typography, Row } from "antd";
const { Title } = Typography;

export default function Projects() {
  return (
    <div>
      <p className={styles.quotes}>
        “It does not take much strength to do things, but it requires a great
        deal of strength to decide what to do.” ― Elbert Hubbard
      </p>
      <Title level={3}>My Work</Title>
      <div className={styles.project}></div>
    </div>
  );
}
