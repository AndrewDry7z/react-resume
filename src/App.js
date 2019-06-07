import React from 'react';
import Header from './components/header/header';
import ContactInfo from './components/contact-info/contact-info'
import './variables.scss';
import 'normalize.css';

import WorkExperience from "./components/work-experience/work-experience";

function App() {
  return (
    <div className="App">
      <Header />
      <ContactInfo />
      <WorkExperience />
    </div>
  );
}

export default App;
