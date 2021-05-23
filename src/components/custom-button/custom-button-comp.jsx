import React from 'react';
import './custom-button-styles.scss';

const CustomButton = ({children,isGoogle,inverted,...others}) => {
    return (
        <button className={`${isGoogle? 'google': ''} ${inverted? 'inverted': ''} custom-button`} {...others}>
            {children}
        </button>
    );
}

export default CustomButton;