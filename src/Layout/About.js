import React from "react";
import { Typography, Row, Col, Icon, Button } from "antd";
import styles from "./About.module.css";
import github from "../assets/statics.png";
import me from "../assets/ME.jpeg";
import Proficiency from "../components/Proficiency/Proficiency";
import TechStack from "../components/TechStack/TechStack";
import Tools from "../components/Tools/Tools";
import Statics from "../components/Statics/Statics";
const { Title } = Typography;

export default function About() {
  return (
    <div className={styles.About}>
      <Row>
        <Col
          lg={{ span: 12 }}
          md={{ span: 24 }}
          sm={{ span: 24 }}
          style={{ padding: "0rem 1rem" }}
        >
          <p className={styles.details}>
            <span>Email : </span> <span>rohansharma.8574@gmail.com</span>
          </p>

          <p className={styles.details}>
            <span>Website : </span> <span>Krishnakantsharma.info</span>
          </p>
          <p className={styles.details}>
            <span>Mobile : </span> <span>+91 8303075870</span>
          </p>
          <p className={styles.details}>
            <span>Location : </span> <span>Bangalore</span>
          </p>
          <div className={styles.social}>
            <a target="_blank" href="">
              <Icon type="linkedin" />
            </a>
            <a target="_blank" href="">
              <Icon type="instagram" />
            </a>
            <a target="_blank" href="">
              <Icon type="github" />
            </a>
            <a target="_blank" href="">
              <Icon type="twitter" />
            </a>
          </div>
          <Button type="primary" className={styles.download}>
            DOWNLOAD CV
          </Button>
        </Col>
        <Col lg={{ span: 12 }} md={{ span: 24 }} sm={{ span: 24 }}>
          <div className={styles.photo}>
            <img src={me}></img>
          </div>
        </Col>
      </Row>
      <Row className={styles.proficiency}>
        <Col span={24}>
          <Title level={3}>Proficiency</Title>
          <Proficiency></Proficiency>
        </Col>
      </Row>
      <Row>
        <Col>
          <Title level={3}>Technology Stack</Title>
          <TechStack></TechStack>
        </Col>
      </Row>
      <Row>
        <Col>
          <Title level={3}>Tools</Title>
          <Tools></Tools>
        </Col>
      </Row>
      <Row>
        <Col>
          <Title level={3}>Statics</Title>
          <Statics></Statics>
        </Col>
      </Row>
      <Row>
        <Col>
          <Title level={3}>Github Statics</Title>
          <img src={github} className={styles.github} />
        </Col>
      </Row>
    </div>
  );
}
