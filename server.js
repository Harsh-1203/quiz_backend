const cors = require("cors");
const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());
const dbConfig = require("./config/dbConfig");
const usersRoute = require("./routes/usersRoute");
const examsRoute = require("./routes/examsRoute");
const resportsRoute = require("./routes/reportsRoute");
const testroutes = require("./routes/testroutes");
app.use(cors());
app.use("/api/users", usersRoute);
app.use("/api/exams", examsRoute);
app.use("/api/reports", resportsRoute);
app.use("/api/testroutes", testroutes);
const port = process.env.PORT || 4444;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
