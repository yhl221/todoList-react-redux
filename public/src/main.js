import React, {Component} from "react";
import {render} from "react-dom";
import App from "./components/app";
import {Provider} from "react-redux";
import {createStore,applyMiddleware} from 'redux'
import reducer from "./reducers/reducer.js"
import Footer from './middleware/footer'
import AddTodo from './middleware/add-todo'
import TodoList from './middleware/todo-list'

const createStoreWithMiddleware = applyMiddleware(AddTodo,TodoList,Footer)(createStore);
const store=createStoreWithMiddleware(reducer);

render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('app')
);

