import React from 'react';
import Routes from './routes'

import './locals/css/style.scss';

import Header from './components/Header';
import Main from './pages/main';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
