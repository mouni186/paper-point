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

const validateTask = (data) => {
    const result = validationHelper.validateAllTask(data);
    console.log('validation successfull');
    return true;
}

const validateMovetoInprogressState = (data) => {
    const result = validationHelper.validateInprogressState(data);
    console.log('validation successfull');
    return true;
}

const validateMovetoCompleteState = (data) => {
    const result = validationHelper.validateInprogressState(data);
    console.log('validation successfull');
    return true;
}

const validateComments = (data) => {
    const result = validationHelper.validateTaskComments(data);
    console.log('validation successfull');
    return true;
}


module.exports = {
    allRepo,
    validateAllDetails,
    validateTask,
    validateMovetoInprogressState,
    validateMovetoCompleteState,
    validateComments
}