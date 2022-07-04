const isName = (req, res, next) => {
  const { name } = res.body;
  if (!name) return res.status(400).json({ message: '"name" is required' });
  console.log(name);
  next();
};

module.exports = isName;
