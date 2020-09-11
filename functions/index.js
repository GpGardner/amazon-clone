const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HPvukHhd2uwz0XxRGH4CDHZBmCUMKpdkqxG9Oy4eQW7WYOZPOZhuMPGEpfizBJVjlb5NSc95ioo4oJBb9s3eA5A00TiNiT6fu"
);

// API

// App Config
const app = express();

//  Middle wares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/api", (request, response) =>
  response.status(200).send("hello world")
);
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request RECIEVED: ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// -Listen command
exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-ae657/us-central1/api)
