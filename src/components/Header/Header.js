import React from "react";
import styles from "./Header.module.css";
import { Typography } from "antd";
import icon from "../../assets/brand.svg";
import me from "../../assets/ME.jpeg";
import { Link } from "react-router-dom";
const { Title } = Typography;

export default function Header() {
  return (
    <div className={styles.Header}>
      <img src={icon}></img>
      <Title level={1}>
        <Link to="/">Krishna Kant Sharma</Link>
      </Title>
    </div>
  );
}
