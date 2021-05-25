import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceInCents = price * 100;
  const publishableKey =
    "pk_test_51IuzOqSEpo2f4gAmmg7KLR7ogjLQ2aapUPx5kBpBU9EOzxo3LSCo86PLtEn6n8rg73i8L0GQQHF6M0XErTahr6AA00XX1UzBHV";

  const onToken = (token) => {
    console.log(token);
    alert("Successful :)");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="FASHIO Clothing Pvt.Ltd"
      billingAddress
      shippingAddress
      image="https://webstockreview.net/images/clipart-clothes-transparent-background-5.png"
      description={`Your Total is $${price}`}
      amount={priceInCents}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}       
    />
  );
};

export default StripeCheckoutButton;
