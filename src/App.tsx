import React from 'react';
import './App.css';
import CurrentTime from "./views/CurrentTime";
import Recommendation from "./views/Recommendation";
import Container from "react-bootstrap/es/Container";
import Row from "react-bootstrap/es/Row";
import Col from "react-bootstrap/es/Col";

const App: React.FC = () => {
  return (
      <Container>
          <Row>
              <Col md={2}></Col>
              <Col md={8}>
                <div className="App">
                    <CurrentTime/>
                    <Recommendation/>
                </div>
              </Col>
              <Col md={2}></Col>
          </Row>
          </Container>
  );
};

export default App;
