const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.subscription = require("./subscription.model.js")(mongoose);
db.purchase = require("./purchase.model.js")(mongoose);

module.exports = db;