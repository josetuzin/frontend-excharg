import React from 'react';
//import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Header from './components/Header'
import ExchangeList from './components/ExchangeList'

function App() {
  return (
    <div className="container p=4">
      
      <Header />
      <ExchangeList />
      
    </div>
  );
}

export default App;