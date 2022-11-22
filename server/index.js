const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
  };
  
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

app.use(bodyParser.json({limit: '50mb'}));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({limit: '50mb', extended: true }));

const db = require("./models");

const TodoRoute = require("./routes/TodoRouter");
app.use("/api/todo", TodoRoute);

db.sequelize.sync().then((req) => {
app.listen(9001,() => {
    console.log("running on port 9001");
});
});