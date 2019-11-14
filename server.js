// package?
const express = require("express");
const mysql = require("mysql");

// starting server
const server = express();

// setting up database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Chitown18",
  database: "dog"
});

db.connect(function(err) {
  if (err) throw err;
  console.log("Mysql is connected");
});

// routes
server.get("/create-table", function(req, res) {
  console.log("hittting create table");
  let sql =
    "CREATE TABLE post(ID int NOT NULL AUTO_INCREMENT, title varchar(255), body TEXT, PRIMARY KEY (ID))";
  db.query(sql, function(err, result) {
    if (err) throw err;
    res.send("CREATED TABLE POST");
  });
});

// create a route that adds a post Record
server.get("/post1", function(req, res) {
  console.log("post record");
  let post = {
    title: "My first db encounter",
    body: "The teacher told me how to do the sql injection judge"
  };
  let sql = "INSERT INTO post SET ?";
  db.query(sql, post, function(err, result) {
    if (err) throw err;
    res.send("added first recordd to our post table");
  });
});

// create a route that adds another post

server.get("/post2", function(req, res) {
  console.log("post record");
  let post = { title: "My second entry", body: "amber alert" };
  let sql = "INSERT INTO post SET ?";
  db.query(sql, post, function(err, result) {
    if (err) throw err;
    res.send("added second recordd t");
  });
});

// create a route that deletes post record

server.get("/delete_post/:id", function(req, res) {
  console.log(req.params.id);
  let sql = "DELETE FROM post WHERE ID=" + req.params.id;
  db.query(sql, function(err, result) {
    if (err) throw err;
    res.send("deleted a post");
  });
});

server.listen(3000, function() {
  console.log("server is lit");
});
