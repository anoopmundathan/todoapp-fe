import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { store } from "./store";
import { TodoApp } from './todos/components/TodoApp';

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
      <TodoApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
