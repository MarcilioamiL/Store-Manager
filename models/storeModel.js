const connections = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM StoreManager.products;';
  const [data] = await connections.execute(query);
  return data;
};

const getById = async (id) => {
  const query = 'SELECT * FROM StoreManager.products WHERE id=?;';
  const [data] = await connections.execute(query, [id]);
  return data;
};

const getPost = async (name) => {
  const query = 'INSERT INTO products (name) VALUES (?);';
  const [data] = await connections.execute(query, [name]);
  return {
    id: data.insertId,
    name,
  };
};

module.exports = {
  getAll,
  getById,
  getPost,
};
