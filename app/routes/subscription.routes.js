module.exports = app => {
    const subscription = require("../controllers/subscription.controller.js");

    const router = require("express").Router();

    // Create a new Subscription
    router.post("/", subscription.create);

    // Retrieve all Subscriptions
    router.get("/", subscription.findAll);

    // Retrieve a single Subscription with id
    router.get("/:id", subscription.findOne);

    // Update a Subscription with id
    router.put("/:id", subscription.update);

    // Delete a Subscription with id
    router.delete("/:id", subscription.delete);

    // Delete all Subscriptions
    router.delete("/", subscription.deleteAll);

    app.use('/api/subscriptions', router);
};