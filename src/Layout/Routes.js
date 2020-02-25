import React from "react";
import { Row, Col } from "antd";
import Header from "../components/Header/Header";
import Navigation from "../components/Navbar/Navigation";
import { Switch, Route } from "react-router-dom";
import styles from "./Routes.module.css";
import About from "./About";
import Projects from "./Projects";
import Home from "./Home";
import Writings from "./Writings";

export default function Routes() {
  return (
    <>
      <Row className={styles.verticle}>
        <Col span={24}>
          <Header></Header>
          <Navigation></Navigation>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/about" exact component={About}></Route>
            <Route path="/projects" exact component={Projects}></Route>
            <Route path="/writings" component={Writings}></Route>
          </Switch>
        </Col>
      </Row>
    </>
  );
}
