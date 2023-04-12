import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import './index.scss';
import App from './App';
import { store } from './redux/store';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
let render_main_app = () =>{

  // console.log(store);

  root.render(
    <React.StrictMode>
        <Router>
          <Provider store={store}>
              <App />
          </Provider>
        </Router>
      </React.StrictMode>
    );
  };

render_main_app();