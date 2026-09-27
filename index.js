require("dotenv").config();

const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());

require("./config/database").connect();

// Route import
const user = require("./routes/user");

app.use("/api/v1", user);

// Activate
app.listen(PORT,  () => {
    console.log(`App is listening at ${PORT}`);
});