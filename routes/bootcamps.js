const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
  response.status(200).json({ success: true, msg: 'Show all bootcamps' });
});

router.get('/:id', (request, response) => {
  response
    .status(200)
    .json({ success: true, msg: `Show all bootcamp ${req.params.id}` });
});

router.post('/', (request, response) => {
  response.status(200).json({ success: true, msg: 'Create new bootcamp' });
});

router.put('/:id', (request, response) => {
  response
    .status(200)
    .json({ success: true, msg: `Update bootcamp ${req.params.id}` });
});

router.delete('/:id', (request, response) => {
  response
    .status(200)
    .json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
});

module.exports = router;
