const Item = require("../models/itemModel");
var express = require("express");
var router = express.Router();


// POST request to add a new item
router.post("/", function (req, res, next) {
    const item = req.body.item
    const newItem = new Item({
        _id: item.id,
        itemName: item.itemName,
        description: item.description,
        price: item.price,
        imageURL: item.imageURL,
        manufacturer: item.manufacturer,
        purchaser: item.purchaser,
    });

    try {
        newItem.save();
        res.send(newItem);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get("/", async function (req, res, next) {
    try {
        const filter = req.query.filter;
        let items;
        if (filter) {
            console.log(filter)
            items = await Item.find({
                itemName: { $regex: filter, $options: "i" },
            });
        } else {
            items = await Item.find();
        }
        res.send(items);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const item = await Item.findByIdAndDelete(req.params.id);
        if (!item) res.status(404).send("No item found");
        res.status(200).send();
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
});
module.exports = router;
