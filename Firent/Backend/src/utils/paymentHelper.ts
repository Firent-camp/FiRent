import { loadStripe } from "@stripe/stripe-js";  // assuming you're using Stripe's JS library

let stripe;

const initializeStripe = async () => {
    if (!stripe) {
        stripe = await loadStripe("YOUR_PUBLIC_STRIPE_KEY");  // replace with your public key
    }
    return stripe;
};

const initiatePayment = async (totalAmount) => {
    try {
        const response = await fetch("http://your_server_url/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ amount: totalAmount }),
        });

        const { clientSecret } = await response.json();

        const stripe = await initializeStripe();

        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardElement,  // This assumes you've created a cardElement with Stripe's Elements
                billing_details: {
                    name: 'Cardholder Name',  // Adjust as needed
                },
            }
        });

        if (paymentResult.error) {
            console.error("Payment failed:", paymentResult.error.message);
        } else {
            if (paymentResult.paymentIntent.status === 'succeeded') {
                console.log("Payment successful!");
            }
        }

    } catch (error) {
        console.error("Error fetching clientSecret:", error);
    }
};

export default initiatePayment;
