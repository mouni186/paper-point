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
const validateMovetoInprogressState = (data) => {
    const result = validationHelper.validateInprogressState(data);
    console.log('validation successfull');
    return true;
}
const validateMovetoCompleteState = (data) => {
    const result = validationHelper.validateCompleteState(data);
    console.log('validation successfull');
    return true;
}


module.exports = {
    allRepo,
    validateAllDetails,
    validatePost,
    validateMovetoInprogressState,
    validateMovetoCompleteState
}