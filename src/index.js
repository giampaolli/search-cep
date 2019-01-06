import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./redux/reducers";
import thunk from "redux-thunk";

import './css/App.css'
import './css/SearchCep.css'

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
serviceWorker.unregister();
