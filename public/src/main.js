import React, {Component} from "react";
import {render} from "react-dom";
import App from "./components/app";
import {Provider} from "react-redux";
import {createStore} from "redux"
import reducer from "./reducers/reducer.js"

const store=createStore(reducer);

render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('app')
);

