import React from 'react';
import Header from './components/header/header';
import ContactInfo from './components/contact-info/contact-info';
import About from './components/about/about';
import 'normalize.css';
import Projects from './components/projects/projects';
import WorkExperience from "./components/work-experience/work-experience";
import Educations from "./components/educations/educations";

function App() {
    return (
        <div className="App">
            <Header/>
            <About/>
            <WorkExperience/>
            <Projects/>
            <Educations/>
            <ContactInfo/>
        </div>
    );
}

export default App;
