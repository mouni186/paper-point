// import joi
const validationHelper = require('../helpers/validation.helper');

const allRepo = (req, res, next) => {
    console.log('validation middleware allRepo');
    return true;
}

const login = (req,res,next) =>{
    console.log('Validation success');
    return true;
}
module.exports = {
    allRepo,login
}