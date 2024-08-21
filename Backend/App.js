const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud",
});
app.get("/", (req, res) => {
  const sql = "SELECT * FROM teacher";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/create", (req, res) => {
  const sql =
    "INSERT INTO teacher (`name`, `sex`, `major`, `email`) VALUES (?)";
  const values = [req.body.name, req.body.sex, req.body.major, req.body.email];
  db.query(sql, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Successfully");
  });
});
app.delete("/delete/:id", (req, res) => {
  const teacherId = req.params.id;
  const sql = "DELETE FROM `teacher` WHERE id = ?";
  db.query(sql, [teacherId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Delete Successfully");
  });
});

app.put("/update/:id", (req, res) => {
  const teacherId = req.params.id;
  const sql =
    "UPDATE `teacher` SET `name`=?, `sex`=?, `major`=?, `email`=? WHERE id =?";
  const values = [req.body.name, req.body.sex, req.body.major, req.body.email];
  db.query(sql, [...values, teacherId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Update Successfully");
  });
});

app.listen(9090, () => {
  console.log("listening");
});
