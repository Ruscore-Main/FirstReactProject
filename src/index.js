import reportWebVitals from './reportWebVitals';
// import store from './redux/store';
import store from './redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
              <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
store.subscribe(()=> {
    let state = store.getState();
    rerenderEntireTree(state)
});

rerenderEntireTree(store.getState());
reportWebVitals();
