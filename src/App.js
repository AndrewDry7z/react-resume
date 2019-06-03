import React from 'react';
import Header from './components/header/header';
import ContactInfo from './components/contact-info/contact-info'
import './variables.scss';
import 'normalize.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ContactInfo />
    </div>
  );
}

export default App;
