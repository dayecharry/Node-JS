const express = require('express');
const upload = require('../../middlewares/upload.file');
const {
  getCharacters,
  postCharacter,
  getAllCharacters,
  postCharacterMultiImage,
} = require('../controllers/characters.controller');

//const { isAuth, isAdmin, logout } = require('../../middlewares/auth');
const router = express.Router();

router.get('/', getCharacters);
router.get('/all', getAllCharacters);
router.post('/', upload.single('image'), postCharacter);
router.post(
  '/multiImage',
  upload.fields([{ name: 'image' }, { name: 'image2' }]),
  postCharacterMultiImage
);

module.exports = router;
