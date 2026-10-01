require("dotenv").config();

const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use(express.json());

require("./config/database").connect();

// Route import
const user = require("./routes/user");

app.use("/api/v1", user);

// Activate
app.listen(PORT, "127.0.0.1", () => {
    console.log(`App is listening at http://127.0.0.1:${PORT}`);
});