import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import './index.css';

import { CountingParent } from './CounterParent';

const Page = () => (
    <div>
        <CountingParent />
        <CountingParent />
        <CountingParent />
    </div>
)

ReactDOM.render(
    <Page />,
    document.querySelector('#root')
);