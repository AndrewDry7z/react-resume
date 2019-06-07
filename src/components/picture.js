import React from 'react';

function Picture({name, type, alt}) {
    return (
        <picture>
            <source type={'image/webp'} srcSet={`./files/images/${name}.webp`}/>
            <source type={`image/${type}`} srcSet={`./files/images/${name}.${type}`}/>
            <img className={'scale-on-hover'} src={`/files/images/${name}.${type}`} alt={`${alt}`} title={`${alt}`}/>
        </picture>
    )
}

export default Picture;