import React from 'react';
import './custom-button-styles.scss';

const CustomButton = ({children,isGoogle,...others}) => {
    return (
        <button className={`${isGoogle? 'google': ''} custom-button`} {...others}>
            {children}
        </button>
    );
}

export default CustomButton;