const erroMiddleware = (err, _req, res, _next) => {
  if (err.status) {
    return res.status(err.status || 500).json({
      message: err.message,
    });
  }
  return res.status(500).json({ message: 'Internal Server Error' });
};

module.exports = erroMiddleware;
