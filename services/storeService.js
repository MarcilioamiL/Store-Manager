const storeModel = require('../models/storeModel');

const getAll = async () => {
  const data = await storeModel.getAll();
  return data;
};

const getById = async (id) => {
  const [data] = await storeModel.getById(id);
  console.log(data);
  if (!data) throw new Error('Product not found');
  return data;
};

module.exports = {
  getAll,
  getById,
};
