import React from 'react';

import './cart-item-styles.scss';

const CartItem= (props) =>{
    const {imageUrl,name,price,count}=props.item;
    console.log(imageUrl,name);
    return(
    <div className='cart-item'>
        <img src={imageUrl} alt="item" />
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>{count} x ${price}</span>
        </div>
    </div>
)};



export default CartItem;