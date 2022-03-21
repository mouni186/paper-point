// import joi
const validationHelper = require('../helpers/validation.helper');

const allRepo = (req, res, next) => {
    console.log('validation middleware allRepo');
    return true;
}
const validateAllDetails = (data) => {
    const result = validationHelper.validateAllUserDetails(data);
    console.log('validation successfull');
    return true;
}
const validatePost = (data) => {
    const result = validationHelper.validateAllPost(data);
    console.log('validation successfull');
    return true;
}

module.exports = {
    allRepo,
    validateAllDetails,
    validatePost
}