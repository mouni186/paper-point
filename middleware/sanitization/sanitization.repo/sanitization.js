// import xss package
const sanitizationHelper = require('../helpers/sanitization.helper');
const allRepo =(req, res, next) => {
 console.log('sanitization middleware allRepo');
  return true;
}

module.exports = {
    allRepo
}