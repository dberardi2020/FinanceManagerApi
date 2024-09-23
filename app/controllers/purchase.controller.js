const db = require("../models");
const Purchase = db.purchase;

// Create and Save a new Purchase
exports.create = (req, res) => {
    const purchase = new Purchase(req.body);

    // Save Purchase in the database
    purchase
        .save(purchase)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Purchase."
            });
        });
};

// Retrieve all Purchases from the database.
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

    // Purchase.find(condition)
    Purchase.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving purchases."
            });
        });
};

// Find a single Purchase with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Purchase.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Purchase with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Purchase with id=" + id });
        });
};

// Update a Purchase by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Purchase.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Purchase with id=${id}. Maybe Purchase was not found!`
                });
            } else res.send({ message: "Purchase was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Purchase with id=" + id
            });
        });
};

// Delete a Purchase with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Purchase.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Purchase with id=${id}. Maybe Purchase was not found!`
                });
            } else {
                res.send({
                    message: "Purchase was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Purchase with id=" + id
            });
        });
};

// Delete all Purchases from the database.
exports.deleteAll = (req, res) => {
    Purchase.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Purchases were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all purchases."
            });
        });
};