import React from "react";
import { Typography, Row, Col, Icon, Button } from "antd";
import styles from "./About.module.css";
import GitHubCalendar from "react-github-calendar";
import me from "../assets/ME.jpeg";
import Proficiency from "../components/Proficiency/Proficiency";
import TechStack from "../components/TechStack/TechStack";
import Tools from "../components/Tools/Tools";
import resume from "../assets/resume.pdf";
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
            <a target="_blank" href="https://www.linkedin.com/in/krishna-sharma-881152120/">
              <Icon type="linkedin" />
            </a>
            <a target="_blank" href="https://www.instagram.com/___coderpanda___/">
              <Icon type="instagram" />
            </a>
            <a target="_blank" href="https://github.com/krishna7860">
              <Icon type="github" />
            </a>
            <a target="_blank" href="https://twitter.com/iamKrishnaSharm">
              <Icon type="twitter" />
            </a>
          </div>
          <a href={resume} download>
            <Button type="primary" className={styles.download}>
              DOWNLOAD CV
            </Button>
          </a>
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
          <Title level={3}>Statistics</Title>
          <Statics></Statics>
        </Col>
      </Row>
      <Row>
        <Col>
          <Title level={3}>Github Statistics</Title>
          <GitHubCalendar
            username="krishna7860"
            blockSize={16}
            tooltips={true}
          />
        </Col>
      </Row>
    </div>
  );
}
