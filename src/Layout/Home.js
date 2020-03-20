import React from "react";
import { Typography, Row, Col, Icon, Button } from "antd";
import styles from "./Home.module.css";
import html from "../assets/html5.svg";
import css from "../assets/css.svg";
import javascript from "../assets/javascript.svg";
import nodejs from "../assets/nodejs.svg";
import flask from "../assets/flask.svg";
import python from "../assets/python.svg";
import database from "../assets/database.svg";
import react from "../assets/react.svg";
import resume from "../assets/resume.pdf";
import mongodb from "../assets/mongodb.svg";
const { Title } = Typography;

export default function Home() {
  return (
    <div className={styles.About}>
      <p>
        Hi i am Krishna, I am a Full Stack Developer from Bangalore. I am
        Proficient In Javascript and React, I worked a lot on developing Quality
        Javascript And Full Stack Apps
      </p>
      <Row>
        <Col span={24}>
          <Col className={styles.download}>
            <Title level={3}>Technology Stack : MERN Stack </Title>
            <a href={resume} download>
              <Button type="primary">Download CV</Button>
            </a>
          </Col>
          <div className={styles.tech}>
            <div>
              <img src={html}></img>
              <span>HTML 5</span>
            </div>
            <div>
              <img src={css}></img>
              <span>CSS</span>
            </div>
            <div>
              <img src={javascript}></img>
              <span>Javascript</span>
            </div>
            <div>
              <img src={react}></img>
              <span>React JS</span>
            </div>
            <div>
              <img src={nodejs}></img>
              <span>NodeJS</span>
            </div>
            <div>
              <img src={mongodb}></img>
              <span>MongoDB</span>
            </div>
            <div>
              <img src={database}></img>
              <span>RDBMS</span>
            </div>
            <div>
              <img src={python}></img>
              <span>Python</span>
            </div>
            <div>
              <img src={flask}></img>
              <span>Flask</span>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <p>
            In my free time, I enjoy playing with Codes, Debugging, reading
            books and listening podcasts. You can find me on{" "}
            <a target="_blank" href="https://twitter.com/iamKrishnaSharm">
              Twitter
            </a>
            ,{" "}
            <a href="https://github.com/krishna7860" target="_blank">
              Github
            </a>
            , and{" "}
            <a
              href="https://www.linkedin.com/in/krishna-sharma-881152120/"
              target="_blank"
            >
              Linkedin
            </a>
            , or reach me via{" "}
            <a href="mailto:rohansharma.8574@gmail.com" target="_blank">
              Email
            </a>
            . I promise I won’t bite. 😉
          </p>
        </Col>
      </Row>
    </div>
  );
}
