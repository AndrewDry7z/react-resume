import React, { Component } from 'react';
import './themes.scss';
import PropTypes from 'prop-types';

export default class ThemesChanger extends Component {

    onBtnClick = (event) => {
        const themeName = event.target.innerText;
        this.props.setTheme(themeName);
    };

    render() {

        return(
            <aside className="themes-changer">
                <p className={"themes-changer__heading"}>Change theme</p>
                <div className="themes-changer-block">
                    <button className="themes-changer__button dark" type={'button'} onClick={this.onBtnClick}>dark</button>
                    <button className="themes-changer__button light" type={'button'} onClick={this.onBtnClick}>light</button>
                </div>
            </aside>
        );
    }
}

ThemesChanger.propTypes = {
    setTheme: PropTypes.func.isRequired
};

