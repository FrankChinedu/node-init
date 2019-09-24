const { validations } = require('indicative');
const Validator = require('indicative/builds/validator');
const { Vanilla } = require('indicative/builds/formatters');


const message = {
  required: 'Input your {{ field }}',
  email: 'The value provided is not an email',
  integer: '{{ field }} must be an integer',
  unique: '{{ field }} already existed',
  alpha: 'Only letters allowed as {{ field }}',
  alphaNumeric: 'Only letters and numbers are allowed as {{ field }}',
  min: '{{ field }} should not be less than {{ argument.0 }}',
  max: '{{ field }} should not be more than {{ argument.0 }}',
};

const sanitizeRules = {
  firstName: 'trim',
  lastName: 'trim',
  username: 'trim',
  email: 'trim',
  password: 'trim',
};

const validatorInstance = Validator(validations, Vanilla);

module.exports = {
  message,
  sanitizeRules,
  validatorInstance
};
