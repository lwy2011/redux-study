import React from 'react';

import './App.css';
import Test from "./components/test";
import {Provider} from "react-redux";
import store from "./store";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Provider store={store}>
              <Test/>
          </Provider>
      </header>
    </div>
  );
}

export default App;
