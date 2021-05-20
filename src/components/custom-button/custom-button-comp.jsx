import React from 'react';
import './custom-button-styles.scss';

const CustomButton = ({children, ...others}) => {
    return (
        <button class='custom-button' {...others}>
            {children}
        </button>
    );
}

export default CustomButton;