function parseQueryParamToInt(paramName) {
  return (req, res, next) => {
    req.query[paramName] = Number(req.query[paramName]);

    next();
  };
}

module.exports = parseQueryParamToInt;
