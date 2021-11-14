const db = require("../models");
const Subscription = db.subscription;

// Create and Save a new Subscription
exports.create = (req, res) => {
    // Validate request
    // for (req.body)
    // if (!req.body.category) {
    //     res.status(400).send({ message: "Content can not be empty!" });
    //     return;
    // }

    // Create a Subscription
    const subscription = new Subscription({
        category: req.body.category,
        amount: req.body.amount,
        destination: req.body.destination,
        source: req.body.source
    });

    // Save Subscription in the database
    subscription
        .save(subscription)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Subscription."
            });
        });
};

// Retrieve all Subscriptions from the database.
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

    // Subscription.find(condition)
    Subscription.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving subscriptions."
            });
        });
};

// Find a single Subscription with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Subscription.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Subscription with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Subscription with id=" + id });
        });
};

// Update a Subscription by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Subscription.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Subscription with id=${id}. Maybe Subscription was not found!`
                });
            } else res.send({ message: "Subscription was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Subscription with id=" + id
            });
        });
};

// Delete a Subscription with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Subscription.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Subscription with id=${id}. Maybe Subscription was not found!`
                });
            } else {
                res.send({
                    message: "Subscription was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Subscription with id=" + id
            });
        });
};

// Delete all Subscriptions from the database.
exports.deleteAll = (req, res) => {
    Subscription.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Subscriptions were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all subscriptions."
            });
        });
};