const db = require('../models');

// methods for the bookController

module.exports = {
    // finds + displays the books
    findAll: (req, res) => {
        // console.log(req.body);
        db.Book.find(req.query)
            .sort({ date: -1 })
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },

    findById: (req, res) => {
        db.Book.findById(req.params.id)
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },

    // add new books into the database
    create: (req, res) => {
        db.Book
            .create(req.body)
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },

    // removes books from the database
    remove: (req, res) => {
        db.Book
            .findById({ _id: req.params.id })
            .then((dbModel) => dbModel.remove())
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },

    // updates books in the database
    update: (req, res) => {
        db.Book
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },


};