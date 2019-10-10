import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const stripePrice = price * 100;
    const stripePublicKey = 'pk_test_bhHPJYkZ675YJro3yAAhIpCT00QL1OvqVp';
    
    const onToken = token => {
        console.log(token);
        alert('Payment successful'); 

    }

    return(
        <StripeCheckout
          label='Pay Now'
          name = 'Reedly Shop'
          billingAddress
          shippingAddress
          image='https://i.ibb.co/7yq6wZK/try.png'
          description={`Your total price is $${price}`}
          amount={stripePrice}
          panelLabel='Pay Now'
          token={onToken}
          stripeKey={stripePublicKey}
         />
    );
}

export default StripeCheckoutButton;