import React from "react";
import styles from "./Project.module.css";
import { Card, Tag, Button } from "antd";

export default function Project({ title, desc, tech, image }) {
  return (
    <Card
      hoverable
      className={styles.card}
      cover={<img alt="example" src={image} className={styles.banner} />}
    >
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
          <Tag key={item}>{item}</Tag>
        ))}
      </div>
    </Card>
  );
}
