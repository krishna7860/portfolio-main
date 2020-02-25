import React from "react";
import styles from "./Blog.module.css";
import { Card, Typography, Button, Tag } from "antd";
const { Title } = Typography;

export default function Blog({ title, image, url, desc, tags }) {
  return (
    <Card hoverable style={{ margin: "1.5rem 0" }}>
      <div className={styles.blog}>
        <div className={styles.banner}>
          <img src={image} />
        </div>
        <div className={styles.content}>
          <Title level={4}>{title}</Title>
          <p>{desc}</p>
          <div>
            {tags.map(val => (
              <Tag key={val}>{val}</Tag>
            ))}
          </div>
          <Button type="primary" icon="align-left" className={styles.btn}>
            <a href={url} target="_blank">
              Read More
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
}
