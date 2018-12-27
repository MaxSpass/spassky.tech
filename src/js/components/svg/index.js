import React from 'react';
import ReactSVG from 'react-svg';

const style = {
    width: 30,
    height: 30,
    fill: '#000'
};

const IconSvg = (props) => {
    const {src, href, cls} = props;
    let classesArray = ['icon-svg'];
    let classesConcat = (cls && cls.length) ? classesArray.concat(cls) : classesArray;
    const classes = classesConcat.join(' ');

    return (
        <a className={classes}
           target="_blank"
           rel="nofollow"
           href={href}>
            <ReactSVG
                src={src}
                style={style}/>
        </a>
    )
};

export default IconSvg;