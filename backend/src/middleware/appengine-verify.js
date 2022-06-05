function verifyRequestComesFromAppEngine(req, res, next) {
  const isAppEngineRequest = req.get('X-Appengine-Cron') === 'true';

  if (isAppEngineRequest) {
    next();
  } else {
    res.status(401).end();
  }
}

module.exports = verifyRequestComesFromAppEngine;
