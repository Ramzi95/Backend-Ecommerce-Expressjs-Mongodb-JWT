const express = require('express');
const router = express.Router();
const stripe = require('stripe');
const Stripe =
    stripe('pk_test_51NXoeLGPfgzEAeOHnltnQlvJDDhsWHN3OflGuyAuSlm6Nm4aeJ2a5mPuhkaXIlnVPj6PmQWoObHGH6bp7qqeWgKv00olbwtXO1');
router.post('/', async (req, res) => {
        //console.log(req.body)
        let status, error;
        const { token, amount } = req.body;
        try {
            await Stripe.charges.create({
                source: token.id,
                amount,
                currency: 'usd',
            });
            status = 'success';
        } catch (error) {
            console.log(error);
            status = 'Failure';
        }
        res.json({ error, status });
    });
module.exports = router;