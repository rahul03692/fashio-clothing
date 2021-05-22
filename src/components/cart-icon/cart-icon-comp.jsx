import React from 'react';
import './cart-icon-styles.scss';

import {ReactComponent as Icon} from '../../assets/shopping-bag.svg';

const CartIcon=() =>(
    <div className='cart-icon'>
        <Icon className='shopping-icon'></Icon>
        <span className='item-count'>0</span>
    </div>
)

export default CartIcon;