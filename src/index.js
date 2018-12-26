import React, { Component } from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import {browserHistory} from 'react-router';
import {composeWithDevTools} from 'redux-devtools-extension';
import {syncHistoryWithStore} from 'react-router-redux'
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'
import {Router, Route} from 'react-router'

import reducers from './js/reducers/index';

import Layout from './js/containers/layout';
import Main from './js/containers/main';

import './css/style.css';

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
));

const history = syncHistoryWithStore(browserHistory, store);

const wrapper = document.getElementById("app");

wrapper ?
    ReactDOM.render(
        <Provider store={store}>
            <Router history={history}>
                <Route component={Layout}>
                    <Route path='/' component={Main} />
                </Route>
            </Router>
        </Provider>,
        document.getElementById('app')
    )
    : false;