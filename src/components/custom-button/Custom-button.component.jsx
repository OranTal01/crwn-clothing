import React from 'react';
import './Custom-button.style.scss';

const CustomButton = ({ children, type, props }) => {
    return (
        <button className={ ` custom-button ${type === 'button' ? 'google' : ''}` } { ...props }>{ children }</button>
    );
};

export default CustomButton;