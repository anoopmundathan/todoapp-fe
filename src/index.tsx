import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import "./index.css";
import { store } from "./store";
import TodoApp from './todos/containers/TodoApp';

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
      <TodoApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
