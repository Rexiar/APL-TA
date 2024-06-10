const express = require('express');
const router = express.Router();
const entryController = require('../controllers/entryControllers');

router.get('/message', entryController.getAllEntries);
router.post('/message', entryController.createEntry);
router.delete('/message', entryController.deleteEntry);
router.patch('/message', entryController.editEntry);

module.exports = router;
