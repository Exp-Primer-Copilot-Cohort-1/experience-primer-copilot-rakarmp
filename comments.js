// Create web server 

// Import express
const express = require('express');
const router = express.Router();

// Import comments controller
const commentsController = require('../controllers/comments');

// Import middleware
const auth = require('../middleware/auth');

// Import multer
const multer = require('../middleware/multer-config');

// Create routes
router.post('/create', auth, multer, commentsController.createComment);
router.get('/all', auth, commentsController.getAllComments);
router.get('/:id', auth, commentsController.getOneComment);
router.put('/:id', auth, multer, commentsController.modifyComment);
router.delete('/:id', auth, commentsController.deleteComment);

// Export routes
module.exports = router;


