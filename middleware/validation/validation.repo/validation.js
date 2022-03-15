// import joi
const validationHelper = require('../helpers/validation.helper');

const allRepo = (req, res, next) => {
    console.log('validation middleware allRepo');
    return true;
}
module.exports = {
    allRepo
}