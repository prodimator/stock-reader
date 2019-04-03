import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import axios from 'axios';
import './stock.scss';

class Stock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stockName: props.stockName
        }
    }
    render() {
        return (
            <div className="stock">
                <div className="stock-name">
                    {this.state.stockName}
                </div>
                <div className="stock-details">
                    {this.state.stockName}
                </div>
            </div>
        );
    }
}

export default Stock;
