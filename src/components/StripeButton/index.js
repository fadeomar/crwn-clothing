import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const PublishableKey =
    "pk_test_51HoAthHZBLD2NAjxdEdeSXdbrtkdJg2Cs13Ahc0OzQvYDNqIRysX5w7lVKFeHrUjtI4m2Jgk6A6W0cJ2FCD34VTg00i9of5qrH";
  const onToken = (token) => console.log(token);
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={PublishableKey}
    />
  );
};

export default StripeCheckoutButton;
