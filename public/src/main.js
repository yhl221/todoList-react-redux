import React, {Component} from "react";
import {render} from "react-dom";
import App from "./components/app";
import {Provider} from "react-redux";
import {createStore,applyMiddleware} from 'redux'
import reducer from "./reducers/reducer.js"
import middleware from './middleware/middleware'

const createStoreWithMiddleware = applyMiddleware(middleware)(createStore);
const store=createStoreWithMiddleware(reducer);

render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('app')
);

