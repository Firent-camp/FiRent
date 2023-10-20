import { loadStripe, Stripe } from "@stripe/stripe-js";

let stripe: Stripe | null = null;

const initializeStripe = async (): Promise<Stripe> => {
    if (!stripe) {
        stripe = await loadStripe("YOUR_PUBLIC_STRIPE_KEY");
    }
    return stripe;
};

const initiatePayment = async (totalAmount: number, cardElement: any): Promise<void> => {
    try {
        const response = await fetch("http://your_server_url/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ amount: totalAmount }),
        });

        const { clientSecret } = await response.json();

        const stripeInstance = await initializeStripe();

        const paymentResult = await stripeInstance.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardElement,
                billing_details: {
                    name: 'Cardholder Name',
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
