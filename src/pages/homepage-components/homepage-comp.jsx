import React from 'react';
import './homepage-styles.scss';

import Directory from '../../components/directory/directory-comp';

export const HomePage = () => {
    return (
        <div className="homepage">
            <Directory />
        </div>
    );
}
