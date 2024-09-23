module.exports = app => {
    const purchase = require("../controllers/purchase.controller.js");

    const router = require("express").Router();

    // Create a new Purchase
    router.post("/", purchase.create);

    // Retrieve all Purchases
    router.get("/", purchase.findAll);

    // Retrieve a single Purchase with id
    router.get("/:id", purchase.findOne);

    // Update a Purchase with id
    router.put("/:id", purchase.update);

    // Delete a Purchase with id
    router.delete("/:id", purchase.delete);

    // Delete all Purchases
    router.delete("/", purchase.deleteAll);

    app.use('/api/purchases', router);
};