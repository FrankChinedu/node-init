const auth = require('auth');

module.exports = app => {
  app.use('/api/v1/auth', auth);
};