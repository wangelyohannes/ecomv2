
/////////
const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "CodingCohort",
});

db.connect((err) => {
  if (err) console.error(err);
  else console.log("db connection successful!");
});

app.use(cors());
app.use(express.json());

app.get("/shop", (req, res) => {
  db.query("SELECT * FROM products", (err, result) => {
    console.log(result)

    if (err) console.error(err);
    else res.send(result);
  });
});

app.listen(4000, () => {
  console.log(`Server listening on port 4000.`);
});
console.log("test7");
