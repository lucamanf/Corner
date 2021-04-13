const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: 'Token assente, autorizzazione negata' });
  }

  // Verify token
  try {
    jwt.verify(token, config.get('jwtSecret'), (error, decoded) => {
      if (error) {
        return res.status(401).json({ msg: 'Il token non è valido' });
      } else {
        req.user = decoded.user;
        next();
      }
    });
  } catch (err) {
    console.error('Qualcosa non va con l auth middleware');
    res.status(500).json({ msg: 'Server Error' });
  }
};
