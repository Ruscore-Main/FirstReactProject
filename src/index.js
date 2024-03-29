import reportWebVitals from './reportWebVitals';
// import store from './redux/store';
import store from './redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter} from "react-router-dom";
import StoreContext from './StoreContext';
import {Provider} from 'react-redux';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

reportWebVitals();
