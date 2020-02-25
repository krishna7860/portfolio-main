import React from "react";
import styles from "./Writings.module.css";
import { Typography } from "antd";
import blog from "../utils/blogs.json";
import Blog from "../components/Blog/Blog";

const { Title } = Typography;
export default function Writings() {
  return (
    <div className={styles.writing}>
      <Title level={3}>My Writing's</Title>
      {blog.map(item => (
        <Blog
          key={item.title}
          title={item.title}
          desc={item.desc}
          image={item.image}
          tags={item.tags}
          url={item.url}
        ></Blog>
      ))}
    </div>
  );
}
