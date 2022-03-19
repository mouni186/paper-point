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

const validatorlogin = (req, res, next) =>{
    try{
        const result = validationRepo.login(req.body);
        next();
    }catch(err){
        throw new Error(err);
    }
}
module.exports = {
    validatorAllRepo,validatorlogin
}