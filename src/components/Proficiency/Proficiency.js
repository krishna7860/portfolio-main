import React from "react";
import styles from "./Proficiency.module.css";
import { Typography, Card } from "antd";
import data from "../../utils/proficiency.json";

const { Title } = Typography;
export default function Proficiency() {
  return (
    <div className={styles.Proficiency}>
      {data.map(item => (
        <Card key={item.title} hoverable className={styles.card}>
          <Title level={4}>{item.title}</Title>
          <p>{item.desc}</p>
        </Card>
      ))}{" "}
    </div>
  );
}
