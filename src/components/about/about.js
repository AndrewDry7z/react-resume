import React from 'react';
import './about.scss';
import Picture from "../common/picture";

function About() {
  return (
      <section className={'about max-width'}>
        <h2>Techs stack</h2>
        <div className="about-content">
          <div className="about-techs">
            <Picture className={'scale-on-hover'} name={'html5_icon'} type={'png'} alt={'HTML5'} />
            <Picture className={'scale-on-hover'} name={'sass_icon'} type={'png'} alt={'SASS/LESS'} />
            <Picture className={'scale-on-hover'} name={'js_icon'} type={'png'} alt={'JS'} />
            <Picture className={'scale-on-hover'} name={'jquery_icon'} type={'png'} alt={'jQuery'} />
            <Picture className={'scale-on-hover'} name={'php_icon'} type={'png'} alt={'PHP'} />
            <Picture className={'scale-on-hover'} name={'sql_icon'} type={'png'} alt={'SQL'} />
            <Picture className={'scale-on-hover'} name={'linux_icon'} type={'png'} alt={'Linux'} />
            <Picture className={'scale-on-hover'} name={'bitrix_icon'} type={'png'} alt={'1C-Bitrix'} />
            <Picture className={'scale-on-hover'} name={'wordpress_icon'} type={'png'} alt={'Wordpress'} />
            <Picture className={'scale-on-hover'} name={'vue_icon'} type={'png'} alt={'Vue + Vuex'} />
          </div>
        </div>

        <h2>Under study</h2>
        <div className="about-content">
          <div className="about-techs">
            <Picture className={'scale-on-hover'} name={'reactjs_icon'} type={'png'} alt={'ReactJS'} />
            <Picture className={'scale-on-hover'} name={'redux_icon'} type={'png'} alt={'Redux'} />
            <Picture className={'scale-on-hover'} name={'nuxt_icon'} type={'png'} alt={'Nuxt.js'} />
            <Picture className={'scale-on-hover'} name={'django_icon'} type={'png'} alt={'Django'} />
            <Picture className={'scale-on-hover'} name={'node_icon'} type={'png'} alt={'Node'} />
            <Picture className={'scale-on-hover'} name={'doker_icon'} type={'png'} alt={'Docker'} />
            <Picture className={'scale-on-hover'} name={'ts_icon'} type={'png'} alt={'TypeScript'} />
          </div>
        </div>
      </section>
  );
}

export default About;
