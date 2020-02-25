import React from "react";
import styles from "./Project.module.css";

import { Card, Tag, Button } from "antd";

export default function Project({ title, desc, tech }) {
  return (
    <Card hoverable className={styles.card}>
      <h3>{title}</h3>
      <p>{desc}</p>
      <Button icon="play-circle" type="primary">
        Live Preview
      </Button>
      <Button className={styles.github} icon="github">
        Github
      </Button>
      <br></br>
      <div className={styles.tech}>
        {tech.map(item => (
          <Tag>{item}</Tag>
        ))}
      </div>
    </Card>
  );
}
