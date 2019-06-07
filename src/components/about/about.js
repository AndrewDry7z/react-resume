import React from 'react';
import './about.scss';
import Picture from "../picture";

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
                    <Picture name={'html5_icon'} type={'png'} alt={'HTML5'}/>
                    <Picture name={'sass_icon'} type={'png'} alt={'SASS'}/>
                    <Picture name={'js_icon'} type={'png'} alt={'JS'}/>
                    <Picture name={'jquery_icon'} type={'png'} alt={'jQuery'}/>
                    <Picture name={'reactjs_icon'} type={'png'} alt={'ReactJS'}/>
                    <Picture name={'php_icon'} type={'png'} alt={'PHP'}/>
                    <Picture name={'sql_icon'} type={'png'} alt={'SQL'}/>
                    <Picture name={'linux_icon'} type={'png'} alt={'Linux'}/>
                    <Picture name={'bitrix_icon'} type={'png'} alt={'1C-Bitrix'}/>
                    <Picture name={'wordpress_icon'} type={'png'} alt={'Wordpress'}/>
                </div>
            </div>
        </section>
    );
}

export default About;