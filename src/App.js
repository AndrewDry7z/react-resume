import React, {Component} from 'react';
import Header from './components/header/header';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setTheme } from "./actions/ThemeActions";
import ContactInfo from './components/contact-info/contact-info';
import About from './components/about/about';
import 'normalize.css';
import Projects from './components/projects/projects';
import WorkExperience from "./components/work-experience/work-experience";
import Educations from "./components/educations/educations";
import ThemesChanger from "./components/themes/themes";

class App extends Component {

    render() {

        const { setThemeAction } = this.props;
        const { theme } = this.props.theme;

        return (
            <div className={"App theme-" + theme}>
                <ThemesChanger setTheme={setThemeAction}/>
                <Header/>
                <About/>
                <WorkExperience/>
                <Projects/>
                <Educations/>
                <ContactInfo/>
            </div>
        );
    }
}


const mapStateToProps = store => {
    return {
        theme: store.theme,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setThemeAction: year => dispatch(setTheme(year)),
    }
};

App.propTypes = {
    theme: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
