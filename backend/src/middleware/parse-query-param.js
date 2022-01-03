function parseQueryParamToInt(...paramNames) {
  return (req, _, next) => {
    for (const paramName of paramNames) {
      if (paramName in req.query) {
        req.query[paramName] = Number(req.query[paramName]);
      }
    }

    next();
  };
}

module.exports = parseQueryParamToInt;
