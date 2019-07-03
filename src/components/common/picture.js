import React from 'react';

function Picture(props) {
    return (
        <picture>
            <source type={'image/webp'} srcSet={`./files/images/${props.name}.webp`}/>
            <source type={`image/${props.type}`} srcSet={`./files/images/${props.name}.${props.type}`}/>
            <img className={'scale-on-hover'} src={`/files/images/${props.name}.${props.type}`} alt={`${props.alt}`} title={`${props.alt}`}/>
        </picture>
    )
}

export default Picture;