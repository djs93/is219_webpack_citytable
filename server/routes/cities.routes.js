const express = require('express');

const cityController = require('../controllers/cities.controllers');

const router = express.Router();

// Retrieve all employees
router.get('/', cityController.findAll);

// Create a new employee
router.post('/', cityController.create);

// Retrieve a single employee with id
router.get('/:id', cityController.findById);

// Update a employee with id
router.put('/:id', cityController.update);

// Delete a employee with id
router.delete('/:id', cityController.delete);

module.exports = router;
