var express = require('express');
var express = require('express');
var router = express.Router();

var burger = require('../models/burger.js');

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hdsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hdsObject);
    });
});

router.post("/burger", function(req, res) {
    burger.insertOne(
        ['burger_name' ,],
        function(result) {
            res.status(200).end();
        });
});

router.put("/burgers/:id", function(req, res) {
    let condition = req.params.condition
    console.log("condition", condition)
    burger.updateOne(
        {devoured:true},
        condition, function(result) {
            res.status(200).end();
        }
    )
})

module.exports = router;
