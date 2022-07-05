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

const getUpdate = async (id, name) => {
  const data = await storeModel.getById(id);
  const updateId = data.find((datas) => datas.id === +(id));
  if (!updateId) throw new Error('Product not found');
  await storeModel.getUpdate(name, id);
  return { id, name };
};

module.exports = {
  getAll,
  getById,
  getPost,
  remove,
  getUpdate,
};
