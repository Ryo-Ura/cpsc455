var express = require("express");
var router = express.Router();

const items = [
    {
        id: 1,
        itemName: "Item 1",
        description: "Description 1",
        price: 10,
        imageURL:
            "https://slp-statics.astockcdn.net/static_assets/staging/22spring/free/browse-vector-categories-collections/Card4_399895799.jpg?width=580",
    },
    {
        id: 2,
        itemName: "Item 2",
        description: "Description 1",
        price: 20,
        imageURL:
            "https://www.freecodecamp.org/news/content/images/2019/07/panel-1-1.png",
    },
];

/* GET users listing. */
router.get("/", function (req, res, next) {
    return res.send(items);
});

router.get("/:itemId", function (req, res, next) {
    const foundItem = items.find((item) => item.id === req.params.itemId);

    if (!foundItem) return res.status(404).send({ message: "Item not found" });

    return res.send(foundItem);
});

router.post("/", function (req, res, next) {
    if (!req.body.item) {
        return res.status(400).send({ message: req.body.item });
    }
    const item = req.body.item;
    items.push(item);
    return res.send(item);
});

router.delete("/:itemId", function (req, res, next) {
    const index = items.findIndex((item) => (item["id"]).toString() === (req.params.itemId).toString());
    if (index === -1) {
        return res.status(404).send({ message: "Item not found" });
    }
    items.splice(index, 1);
    return res.send();
});

module.exports = router;
