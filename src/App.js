import React from "react";
import "./App.css";
import { Row, Col } from "antd";
import Routes from "./Layout/Routes";

function App() {
  return (
    <>
      <Row>
        <Col
          lg={{ span: 16, offset: 4 }}
          md={{ span: 20, offset: 2 }}
          sm={{ span: 24 }}
        >
          <Routes></Routes>
        </Col>
      </Row>
    </>
  );
}

export default App;
