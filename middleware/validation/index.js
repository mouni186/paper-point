const validationRepo = require('./validation.repo/validation.js');

const validatorAllRepo= (req, res, next) => {
    try{
        const result = validationRepo.allRepo(req.body);
        next();
    }
    catch(err){
       throw new Error(err);
    }
}

module.exports = {
    validatorAllRepo
}