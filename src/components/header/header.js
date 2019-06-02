import React from 'react';
import './header.scss';
import Picture from '../../components/picture';

function Header() {
    return (
        <header className={'header max-width'}>
            <div className={'header__hello'}>
                <Picture name={'photo'} type={'jpg'} alt={'Andrew Chufistov'}/>
                <h1>Hello! <br/>
                I'm Andrew Chufistov, <br/>
                Web Developer.</h1>
            </div>

            <div className={'header__info'}>
                <div className="header__info-link">
                    <p><Picture name={'homepage_icon'} type={'png'} alt={'Home Page Icon'}/> Portfolio</p>
                    <p><a href="http://kolbasim.site/">http://kolbasim.site/</a></p>
                </div>
                <div className="header__info-qr">
                    <Picture name={'qr-code'} type={'png'} alt={'Home Page Icon'}/>
                </div>
            </div>
        </header>
    );
}

export default Header;
