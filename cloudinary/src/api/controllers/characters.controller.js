const Character = require('../models/characters.model');

//const { generateSign } = require('../../utils/jwt');

const getCharacters = async (req, res) => {
  try {
    const numCharacters = await Character.countDocuments();
    let { page, limit } = req.query;
    limit = limit ? parseInt(limit) : 3;
    /*if (!isNaN(parseInt(page))) {
      page = page ? parseInt(page) : 1;
    } else {
      page = 1;
    }*/
    page = !isNaN(parseInt(page)) ? (page ? parseInt(page) : 1) : 1;
    let numPages = Math.ceil(numCharacters / limit);

    if (page > numPages) {
      page = numPages;
    }
    if (page < 1) {
      page = 1;
    }
    console.log(numPages, numCharacters);
    const skip = (page - 1) * limit;
    // descarto los elementos que no esten en la pagina indicada
    const characters = await Character.find().skip(skip).limit(limit);
    return res.status(200).json({
      characters: characters,
      nextPage: numPages >= page + 1 ? `characters/?page=${page + 1}` : null,
      prevPage: page === 1 ? null : `characters/?page=${page - 1}`,
    });
  } catch (error) {
    return res.status(400).json(error);
  }
};
const getAllCharacters = async (req, res) => {
  try {
    const allCharacter = await Character.find();
    return res.status(200).json(allCharacter);
  } catch (error) {
    return res.status(400).json(error);
  }
};
const postCharacter = async (req, res) => {
  try {
    console.log(req.file.path);
    const newCharacter = new Character(req.body);

    if (req.file.path) {
      newCharacter.image = req.file.path;
    }
    const createdCharacter = await newCharacter.save();
    return res.status(200).json(createdCharacter);
  } catch (error) {
    return res.status(400).json(error);
  }
};
const postCharacterMultiImage = async (req, res) => {
  try {
    console.log(req.files);
    const newCharacter = new Character(req.body);
    if (req.files.image) {
      newCharacter.image = req.files.image[0].path;
    }

    if (req.files.image2) {
      newCharacter.image2 = req.files.image2[0].path;
    }
    const createdCharacter = await newCharacter.save();
    return res.status(200).json(createdCharacter);
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = {
  getCharacters,
  postCharacter,
  getAllCharacters,
  postCharacterMultiImage,
};
