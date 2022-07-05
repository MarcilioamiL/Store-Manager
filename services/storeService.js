const storeModel = require('../models/storeModel');

const getAll = async () => {
  const data = await storeModel.getAll();
  return data;
};

const getById = async (id) => {
  const [data] = await storeModel.getById(id);
  if (!data) throw new Error('Product not found');
  return data;
};

const getPost = async (name) => {
  const data = await storeModel.getPost(name);
  return data;
};

const remove = async (id) => {
  const [data] = await storeModel.getById(id);
  if (!data) throw new Error('Product not found');
  const removeId = storeModel.remove(id);
  return removeId;
};

module.exports = {
  getAll,
  getById,
  getPost,
  remove,
};
