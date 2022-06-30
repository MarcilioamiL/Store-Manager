const storeService = require('../services/storeService');

const getAll = async (req, res) => {
  try {
    const data = await storeService.getAll();
    res.status(200).json(data);
  } catch (error) {
    return res.status(404).send();
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await storeService.getById(+id);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const getPost = async (req, res) => {
  try {
    const { name } = req.body;
    const data = await storeService.getPost(name);
    res.status(201).json(data);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getAll,
  getById,
  getPost,
};
