import React from 'react';

const Contact = () => {
    var style = document.querySelector('body').style;
    var style_strok = 'url()';
    style.setProperty('--background', style_strok);
    return (
        <div className='main' style={{font: '700 normal 1em tahoma', color: '#fff'}}> 
            Скоро будет доступно
        </div>
    );
};

export default Contact;