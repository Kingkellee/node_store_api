const errorHandlerMiddleware = async (err, req, res, next) => {
  console.log(err);
  return res
    .status(500)
    .json({ msg: 'OOPS!! Something went wrong, please try again' });
};

module.exports = errorHandlerMiddleware;
