import React, { useEffect } from "react";
import "./App.css";
import { Row, Col } from "antd";
import Routes from "./Layout/Routes";

function App() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    document.addEventListener("mousemove", e => {
      cursor.setAttribute(
        "style",
        "top:" + (e.pageY - 20) + "px; left:" + (e.pageX - 20) + "px;"
      );
    });
  }, []);
  return (
    <>
      <div className="cursor"></div>
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
