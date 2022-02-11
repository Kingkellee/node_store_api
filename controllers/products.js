const getStaticProducts = (req, res) => {
  throw new Error('Testing new Error');
  // res.status(200).send('Static Product');
};

const getProducts = (req, res) => {
  res.status(200).send('Products');
};

module.exports = { getProducts, getStaticProducts };
