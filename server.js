const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

const mongoUser = process.env.MONGO_USER;
const mongoPassword = process.env.MONGO_PASSWORD

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(`mongodb://${mongoUser}:${mongoPassword}@ds235658.mlab.com:35658/heroku_dprdz1ff`, { useNewUrlParser: true });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
