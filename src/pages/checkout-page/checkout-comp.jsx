import React from "react";

import "./checkout-styles.scss";
import StripeCheckout from "../../components/stripe-checkout/stripe-checkout-comp";
import { connect } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart-selectors";
import CheckOutItem from "../../components/checkout-item/checkout-item-comp";

const CheckOut = ({ cartItems, total }) => {
  console.log(total);
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Display</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckOutItem key={item.id} item={item} />
      ))}
      <div class="total">
        {total ? <span>Total: ${total}</span> : <span>Your Cart is Empty</span>}
      </div>
      <div className="test-warning">
        *Please Use Following Card Details*
        <br />
        4242 4242 4242 4242 - EXP: Any Future Date - CVV: Any 3 Digits
      </div>
      <StripeCheckout price={total} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
  total: selectCartTotal(state),
});

export default connect(mapStateToProps)(CheckOut);
