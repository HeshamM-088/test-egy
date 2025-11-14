const express = require('express');
const addEvent = require('../../controllers/events/addevents');
const getAllEvents = require('../../controllers/events/getAllEvents');
const getEvent = require('../../controllers/events/getEvent');

const router = express.Router();

router.get('/', getAllEvents);
router.get('/:id', getEvent);
router.post('/addevents', addEvent);

module.exports = router;