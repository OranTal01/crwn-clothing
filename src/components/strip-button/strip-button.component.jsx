import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {

    const priceForStripe = price * 100;
    const PublishableKey = 'pk_test_4YXAgJBqncR4Ps29wY9NNmz800PzSfW0Uz';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    };

    return (
        <StripeCheckout
            label="Pay Now"
            panelLabel="Pay Now"
            name="CRWN Clothing Ltd." // the pop-in header title
            description={ `Your total is $${price}` } // the pop-in header subtitle
            image="https://sendeyo.com/up/d/f3eb2117da" // the pop-in header image (default none)
            amount={ priceForStripe } // cents
            shippingAddress // Note: Enabling either address option will give the user the ability to
            billingAddress // fill out both. Addresses are sent as a second parameter in the token callback.
            allowRememberMe // "Remember Me" option (default true)
            token={ onToken } // submit callback
            stripeKey={ PublishableKey }
        >
        </StripeCheckout>
    );
};

export default StripeCheckoutButton;