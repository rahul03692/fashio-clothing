import React from 'react';
import './cart-icon-styles.scss';
import {ReactComponent as Icon} from '../../assets/shopping-bag.svg';
import {connect} from 'react-redux';
import {FlipCartDropDown} from '../../redux/cart/cart-actions';
import {selectCartCount} from '../../redux/cart/cart-selectors';

const CartIcon=({FlipCartDropDown,count}) =>(
    <div className='cart-icon' onClick={FlipCartDropDown}>
        <Icon className='shopping-icon'></Icon>
        <span className='item-count'>{count}</span>
    </div>
)

const mapDispatchToProps = (dispatch) =>({
    FlipCartDropDown : () => dispatch(FlipCartDropDown()),
});

const mapStateToProps = (state) =>({
    count:selectCartCount(state),
});

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);