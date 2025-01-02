// routes/userRoutes.js
const express = require('express');
const {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  loginUser,
} = require('../controllers/userController');
const verifyToken = require('../middleware/auth');

const router = express.Router();

router.post('/', createUser);
router.post('/login', loginUser);
router.get('/:id', verifyToken, getUserById);
router.put('/:id', verifyToken, updateUser);
router.delete('/:id', verifyToken, deleteUser);

module.exports = router;