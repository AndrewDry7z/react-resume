import React from 'react';
import './header.scss';
import Picture from '../common/picture';
import MessageModalInit from '../common/modal-message';

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
                <MessageModalInit isOpen={false}/>
            </div>

            <Picture className={'under-construction'} name={'under-construction'} type={'png'} alt={'Under Construction'}/>
        </header>
    );
}

export default Header;
