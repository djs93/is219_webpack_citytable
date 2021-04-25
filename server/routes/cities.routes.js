const express = require('express')
const router = express.Router()
const cityController = require('../controllers/cities.controllers');
const jwt = require('jsonwebtoken');

const accessTokenSecret = 'can the semester end already';

authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, accessTokenSecret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

// Retrieve all city
router.get('/', authenticateJWT, cityController.findAll);

// Create a new city
router.post('/', authenticateJWT, (req, res) => {
    const { role } = req.user;

    if (role !== 'admin') {
        return res.sendStatus(403);
    }

    cityController.create(req, res);
});

// Retrieve a single city with id
router.get('/:id', authenticateJWT, cityController.findById);

// Update a city with id
router.put('/:id', authenticateJWT, (req, res) => {
    const { role } = req.user;

    if (role !== 'admin') {
        return res.sendStatus(403);
    }

    cityController.update(req, res);
});

// Delete a city with id
router.delete('/:id', authenticateJWT, (req, res) => {
    const { role } = req.user;

    if (role !== 'admin') {
        return res.sendStatus(403);
    }

    cityController.delete(req, res);
});

module.exports = router