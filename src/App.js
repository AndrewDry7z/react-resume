import React from 'react';
import Header from './components/header/header';
import ContactInfo from './components/contact-info/contact-info';
import About from './components/about/about';
import './variables.scss';
import 'normalize.css';

import WorkExperience from "./components/work-experience/work-experience";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <WorkExperience />
      <ContactInfo />
    </div>
  );
}

export default App;
