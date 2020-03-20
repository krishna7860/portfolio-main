import React from "react";
import styles from "./Project.module.css";
import { Card, Tag, Button } from "antd";

export default function Project({ title, desc, tech, image, live, github }) {
  return (
    <Card
      hoverable
      className={styles.card}
      style={{ border: "2px solid rgba(0,0,0,.2)" }}
      cover={<img alt="example" src={image} className={styles.banner} />}
    >
      <h3>{title}</h3>
      <p>{desc}</p>
      <a className={styles.color} href={live} target="_blank">
        <Button icon="play-circle" type="primary">
          Live Preview
        </Button>
      </a>
      <a className={styles.color} href={github} target="_blank">
        <Button className={styles.github} icon="github">
          Github
        </Button>
      </a>
      <br></br>
      <div className={styles.tech}>
        {tech.map(item => (
          <Tag key={item}>{item}</Tag>
        ))}
      </div>
    </Card>
  );
}
