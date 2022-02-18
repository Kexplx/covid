const users = [];

/**
 * Returns a middleware that:
 *
 * Blocks the user's IP address if more than 30 requests
 * arrive in a specified time window (e.g. 10 min).
 *
 * - Might be better to use https://www.npmjs.com/package/express-rate-limit instead.
 */
function spamProtector(requestsBeforeBlock = 30, windowInMinutes = 10) {
  return (req, res, next) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    const user = users.find(u => u.ip === ip);
    if (user) {
      if (user.isBlocked) {
        return res.status(429).end();
      }

      const windowHasTimedOut = (Date.now() - user.firstRequestTime) / 60000 > windowInMinutes;
      if (windowHasTimedOut) {
        // The user's first request was long ago and the window
        // has timed out, we reset the window and the request count.
        user.firstRequestTime = Date.now();
        user.requestCount = 1;

        return next();
      }

      const tooManyRequests = user.requestCount > requestsBeforeBlock;
      if (tooManyRequests) {
        // Block the user indefinitely or until
        // AppEngine wipes the instance's state.
        user.isBlocked = true;

        return res.status(429).end();
      } else {
        user.requestCount++;

        return next();
      }
    } else {
      users.push({
        ip,
        firstRequestTime: Date.now(),
        requestCount: 1,
      });

      return next();
    }
  };
}

module.exports = spamProtector;
