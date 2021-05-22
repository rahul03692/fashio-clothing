import React from 'react';

import CustomButton from '../custom-button/custom-button-comp';

const CartDropDown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomButton className='button'>Go To CheckOut</CustomButton>
    </div>
) 

export default CartDropDown;