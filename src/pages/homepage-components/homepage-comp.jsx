import React from 'react';

import Directory from '../../components/directory/directory-comp';
import {HomePageContainer} from './homepage-styles';
 
export const HomePage = () => {
    return (
        <HomePageContainer>
            <Directory />
        </HomePageContainer>
    );
}
