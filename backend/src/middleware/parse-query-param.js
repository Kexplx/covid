function parseQueryParamToInt(paramName) {
  return (req, _, next) => {
    req.query[paramName] = Number(req.query[paramName]);

    next();
  };
}

module.exports = parseQueryParamToInt;
