import React from 'react';
import './about.scss';
import Picture from "../common/picture";

function About() {
    return (
        <section className={'about max-width'}>
            <h2>About me / Techs stack</h2>
            <div className="about-content">
                <div className="about-text">
                    <p>I <span role={'img'}>❤</span>️ everything about web and really enjoy what I do!</p>
                    <p>Currently I aspire to the title of "Full Stack Middle"</p>
                </div>
                <div className="about-techs">
                    <Picture className={'scale-on-hover'} name={'html5_icon'} type={'png'} alt={'HTML5'}/>
                    <Picture className={'scale-on-hover'} name={'sass_icon'} type={'png'} alt={'SASS'}/>
                    <Picture className={'scale-on-hover'} name={'js_icon'} type={'png'} alt={'JS'}/>
                    <Picture className={'scale-on-hover'} name={'jquery_icon'} type={'png'} alt={'jQuery'}/>
                    <Picture className={'scale-on-hover'} name={'reactjs_icon'} type={'png'} alt={'ReactJS'}/>
                    <Picture className={'scale-on-hover'} name={'php_icon'} type={'png'} alt={'PHP'}/>
                    <Picture className={'scale-on-hover'} name={'sql_icon'} type={'png'} alt={'SQL'}/>
                    <Picture className={'scale-on-hover'} name={'linux_icon'} type={'png'} alt={'Linux'}/>
                    <Picture className={'scale-on-hover'} name={'bitrix_icon'} type={'png'} alt={'1C-Bitrix'}/>
                    <Picture className={'scale-on-hover'} name={'wordpress_icon'} type={'png'} alt={'Wordpress'}/>
                </div>
            </div>
        </section>
    );
}

export default About;