import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Col, Row } from "reactstrap";

import './styles.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Songs from './components/Songs';

const App: React.FC = () => {
  const styles = {
    contentDiv: {
      display: "flex",
    },
    contentMargin: {
      marginTop: "250px",
      marginLeft: "300px",
      width: "100%",
    },
  };

  return (
    <div className="App">
      <Row>
        <Col>
          <Header></Header>
        </Col>
      </Row>

      <div style={styles.contentDiv}>
        <Sidebar />
        <div style={styles.contentMargin}>
          <Songs />

        </div>
      </div>

    </div>
  );
};

export default App;
