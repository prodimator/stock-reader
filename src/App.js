import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Stock from "./components/stock/stock";
import './App.scss';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Row center="md">
          <Col md={8}>
            <div className="stocks-table">
              <Stock stockName="MSFT" />
              <Stock stockName="NVDA" />

            </div>
          </Col>
        </Row>

      </div>
    );
  }
}

export default App;
