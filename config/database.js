const mongoose = require("mongoose");

exports.connect = () => {
    console.log("MongoDB URL exists:", !!process.env.MONGODB_URL);

    mongoose.connect(process.env.MONGODB_URL)
        .then(() => {
            console.log("DB connected Successfully");
        })
        .catch((err) => {
            console.log("DB connection Issues");
            console.error(err);
            process.exit(1);
        });
};