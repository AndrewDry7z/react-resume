import React from 'react';
import './projects.scss';
import TinySlider from "tiny-slider-react";
import Picture from "../common/picture";

function Projects() {

    let sliderSettings = {
        nav: false,
        mouseDrag: true,
        autoplay: true,
        autoplayButton: false,
        autoplayButtonOutput: false,
        autoplayTimeout: 8000,
        autoplaySpeed: 6000,
        speed: 2000,
        autoplayHoverPause: true,
        items: 4,
        controls: true,
        slideBy: "1",
        center: true,
        loop: true,
        rewind: false,
        responsive: {
            1400: {
                items: 4
            },
            1024: {
                items: 3
            },
            768: {
                items: 2
            },
            300: {
                items: 1
            }
        }
    };

    return (
        <section className="projects">
            <h2>My portfolio</h2>
            <TinySlider settings={sliderSettings}>
                <div className="projects-item">
                    <p className="projects-item__name">Sales Generator LP</p>
                    <a href="//sales-generator.ru/company" rel={'nofollow'} target={'_blank'}>
                        <Picture className={'projects-item__image'} name={'sg-company'} alt={'SEO Agency LP'}
                                 type={'jpg'}/>
                    </a>
                    <p className="projects-item__link">
                        <a href="//sales-generator.ru/company" rel={'nofollow'} target={'_blank'}>sales-generator.ru/company</a>
                    </p>
                    <p className="projects-item__description">
                       SEO and Internet Marketing agency landing page
                    </p>
                    <p className="projects-item__tech">
                        <Picture classname={''} name={'sass_icon'} type={'png'} alt={'SCSS'}/>
                        <Picture className={''} name={'html5_icon'} type={'png'} alt={'HTML5'}/>
                    </p>
                </div>
                <div className="projects-item">
                    <p className="projects-item__name">Dynamic Photo Gallery</p>
                    <a href="/projects/mywed-demo/" rel={'nofollow'} target={'_blank'}>
                        <Picture className={'projects-item__image'} name={'mywed-demo'} alt={'Photo Gallery'}
                                 type={'jpg'}/>
                    </a>
                    <p className="projects-item__link">
                        <a href="/projects/mywed-demo/" rel={'nofollow'} target={'_blank'}>mywed-demo</a>
                    </p>
                    <p className="projects-item__description">
                        Dynamic photo gallery on Javascript ES6
                    </p>
                    <p className="projects-item__tech">
                        <Picture className={''} name={'js_icon'} type={'png'} alt={'JS'}/>
                    </p>
                </div>
                <div className="projects-item">
                    <p className="projects-item__name">Legint</p>
                    <a href="//en.legint.com" rel={'nofollow'} target={'_blank'}>
                        <Picture className={'projects-item__image'} name={'legint.com-small'} alt={'Legint'}
                                 type={'jpg'}/>
                    </a>
                    <p className="projects-item__link">
                        <a href="//en.legint.com" rel={'nofollow'} target={'_blank'}>en.legint.com</a>
                    </p>
                    <p className="projects-item__description">
                        Multilingual Wordpress website for political technology bureau focused on the Middle East
                    </p>
                    <p className="projects-item__tech">
                        <Picture className={''} name={'wordpress_icon'} type={'png'} alt={'Wordpress'}/>
                        <Picture classname={''} name={'vc_icon'} type={'png'} alt={'Visual Composer'}/>
                    </p>
                </div>
                <div className="projects-item">
                    <p className="projects-item__name">Repair Calc</p>
                    <a href="//myremontnow.ru/calculator/" rel={'nofollow'} target={'_blank'}>
                        <Picture className={'projects-item__image'} name={'myremont'} alt={'MyRemont'} type={'jpg'}/>
                    </a>
                    <p className="projects-item__link">
                        <a href="//myremontnow.ru/calculator/" rel={'nofollow'}
                           target={'_blank'}>myremontnow.ru/calculator</a>
                    </p>
                    <p className="projects-item__description">
                        Repair cost and terms calculator LP for construction/repair company based in Moscow
                    </p>
                    <p className="projects-item__tech">
                        <Picture className={''} name={'html5_icon'} type={'png'} alt={'HTML5'}/>
                        <Picture classname={''} name={'js_icon'} type={'png'} alt={'JavaScript'}/>
                        <Picture classname={''} name={'ajax_icon'} type={'png'} alt={'AJAX'}/>
                    </p>
                </div>
                <div className="projects-item">
                    <p className="projects-item__name">Sales Generator</p>
                    <a href="//sales-generator.ru" rel={'nofollow'} target={'_blank'}>
                        <Picture className={'projects-item__image'} name={'sg'} alt={'Sales Generator'}
                                 type={'jpg'}/>
                    </a>
                    <p className="projects-item__link">
                        <a href="//sales-generator.ru" rel={'nofollow'} target={'_blank'}>sales-generator.ru</a>
                    </p>
                    <p className="projects-item__description">
                        Bitrix-based website for SEO and Internet Marketing agency
                    </p>
                    <p className="projects-item__tech">
                        <Picture className={''} name={'bitrix_icon'} type={'png'} alt={'Bitrix'}/>
                        <Picture className={''} name={'php_icon'} type={'png'} alt={'PHP'}/>
                        <Picture classname={''} name={'js_icon'} type={'png'} alt={'JavaScript'}/>
                        <Picture classname={''} name={'sass_icon'} type={'png'} alt={'SCSS'}/>
                    </p>
                </div>
                <div className="projects-item">
                    <p className="projects-item__name">Personal Website</p>
                    <a href="//kolbasim.site" rel={'nofollow'} target={'_blank'}>
                        <Picture className={'projects-item__image'} name={'kolbasim'} alt={'Personal Website'}
                                 type={'jpg'}/>
                    </a>
                    <p className="projects-item__link">
                        <a href="//kolbasim.site" rel={'nofollow'} target={'_blank'}>kolbasim.site</a>
                    </p>
                    <p className="projects-item__description">
                        You're here now :)
                    </p>
                    <p className="projects-item__tech">
                        <Picture className={''} name={'reactjs_icon'} type={'png'} alt={'ReactJS'}/>
                        <Picture className={''} name={'sass_icon'} type={'png'} alt={'SCSS'}/>
                    </p>
                </div>
                <div className="projects-item">
                    <p className="projects-item__name">Car service center LP</p>
                    <a href="//nakolesah.site/diski/" rel={'nofollow'} target={'_blank'}>
                        <Picture className={'projects-item__image'} name={'nakolesah'} alt={'Car service center LP'}
                                 type={'jpg'}/>
                    </a>
                    <p className="projects-item__link">
                        <a href="//nakolesah.site/diski/" rel={'nofollow'} target={'_blank'}>nakolesah.site/diski/</a>
                    </p>
                    <p className="projects-item__description">
                        Landing page for car service center based in Moscow
                    </p>
                    <p className="projects-item__tech">
                        <Picture className={''} name={'html5_icon'} type={'png'} alt={'HTML5'}/>
                        <Picture className={''} name={'bootstrap_icon'} type={'png'} alt={'Bootstrap'}/>
                    </p>
                </div>
                <div className="projects-item">
                    <p className="projects-item__name">Interactive US map</p>
                    <a href="/projects/us-map/" rel={'nofollow'} target={'_blank'}>
                        <Picture className={'projects-item__image'} name={'usmap'} alt={'US interactive map'}
                                 type={'jpg'}/>
                    </a>
                    <p className="projects-item__link">
                        <a href="/projects/us-map/" rel={'nofollow'} target={'_blank'}>us-map</a>
                    </p>
                    <p className="projects-item__description">
                        Visual presentation of the educational project for RUDN University
                    </p>
                    <p className="projects-item__tech">
                        <Picture className={''} name={'html5_icon'} type={'png'} alt={'HTML5'}/>
                        <Picture className={''} name={'svg_icon'} type={'png'} alt={'SVG'}/>
                    </p>
                </div>
            </TinySlider>
        </section>
    )
}

export default Projects;
