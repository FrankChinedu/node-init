const { sanitize }  = require('indicative');
const {
  messages,
  validatorInstance,
  sanitizeRules
} =  require('./validate-utils');

const login = (req, res, next) => {
  const rules = {
    email: 'required|email',
    password: 'required',
  };

  const data = req.body;

  sanitize(data, sanitizeRules);
  try {
    await validatorInstance.validateAll(data, rules, messages);
    return next();
  } catch (e) {
    return res.status(422).jerror('ValidationFailed', e);
  }
}

const signup = async (req, res, next) => {
  const rules = {
    firstName: 'required|alpha',
    lastName: 'required|alpha',
    username: 'required|alphaNumeric|unique:User',
    email: 'required|email|unique:User',
    password: 'required|min:8|max:30',
  };

  const data = req.body;

  sanitize(data, sanitizeRules);
  try {
    await validatorInstance.validateAll(data, rules, messages);
    return next();
  } catch (e) {
    return res.status(422).jerror('ValidationFailed', e);
  }
}

module.exports = {
  login,
  signup
};
