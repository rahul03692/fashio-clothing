import React from "react";

import './collection-item-styles.scss';
import CustomButton from '../custom-button/custom-button-comp';
import {AddItem} from '../../redux/cart/cart-actions';
import {connect} from 'react-redux';

const CollectionItem = ({ AddItem,item }) => {
  const {name, price, imageUrl}=item;
  return (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="collection-footer"> 
        <span className="name">{name}</span>
        <span className="price">{price}</span>
    </div>
    <CustomButton onClick={() => {AddItem(item)}} inverted className='custom-button'>add to cart</CustomButton>
  </div>
)};

const mapDispatchToProps= (dispatch) => ({
  AddItem: item => dispatch(AddItem(item)),
});

export default connect(null,mapDispatchToProps)(CollectionItem); 