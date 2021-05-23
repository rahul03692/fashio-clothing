import React from "react";
import {connect} from 'react-redux';
import {DecreaseItem, RemoveItem,IncreaseItem} from '../../redux/cart/cart-actions';
import "./checkout-item-styles.scss";

const CheckOutItem = ({item,DeleteItem,DecreaseItem,IncreaseItem}) => {
    const {imageUrl,name,price,count}=item;
    return(
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="item" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">
        <div className='arrow' onClick={()=>(DecreaseItem(item))}>&#10094;</div>
        <span className='value'>{count}</span>
        <div className='arrow' onClick={()=>(IncreaseItem(item))}>&#10095;</div>
    </span>
    <span className="price">{price}</span>
    <div className="remove-button" onClick={()=>(DeleteItem(item))}> &#10005;</div>
  </div>
)};

const mapDispatchToProps=(dispatch) =>({
    DeleteItem:item => dispatch(RemoveItem(item)),
    DecreaseItem:item => dispatch(DecreaseItem(item)),
    IncreaseItem:item => dispatch(IncreaseItem(item))
});

export default connect(null,mapDispatchToProps)(CheckOutItem);