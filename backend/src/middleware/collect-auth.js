// Make sure requests to "/collect"
// are coming from App Engine.
function collectAuth(req, res, next) {
  const comesFromAppEngine = req.get('X-Appengine-Cron') === 'true';

  if (!comesFromAppEngine) {
    res.status(401).end();
    return;
  }

  next();
}

module.exports = collectAuth;
