import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button-comp";
import "./cart-dropdown-styles.scss";
import { selectCartItems } from "../../redux/cart/cart-selectors";
import { withRouter } from "react-router-dom";
import CartItem from "../cart-item/cart-item-comp";
import { FlipCartDropDown } from "../../redux/cart/cart-actions";

const CartDropDown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your Cart is Empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(FlipCartDropDown());
        }}
      >
        Go To CheckOut
      </CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
