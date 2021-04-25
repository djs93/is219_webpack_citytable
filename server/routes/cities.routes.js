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

// Retrieve all employees
router.get('/', authenticateJWT, cityController.findAll);

// Create a new employee
router.post('/', authenticateJWT, cityController.create);

// Retrieve a single employee with id
router.get('/:id', authenticateJWT, cityController.findById);

// Update a employee with id
router.put('/:id', authenticateJWT, cityController.update);

// Delete a employee with id
router.delete('/:id', authenticateJWT, cityController.delete);

module.exports = router