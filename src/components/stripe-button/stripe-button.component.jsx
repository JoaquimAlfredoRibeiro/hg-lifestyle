import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_fZf19rH8tVQF8bz7YCjzFryN00zYXokEXc";

  const onToken = token => {
    console.log(token);
    alert("Payment Succesful!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Hg Lifestyle Inc."
      currency="eur"
      billingAddress
      shippingAddress
      image="https://suncatcherstudio.com/uploads/monograms/fancy-split-font/png/fancy-h-split-monogram.png"
      description={`Your total is ${price} €`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
