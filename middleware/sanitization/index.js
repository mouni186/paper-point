const sanitizationRepo = require('./sanitization.repo/sanitization.js');

const sanitizaAllRepo =  (req, res, next) => {
    try{
        const result = sanitizationRepo.allRepo(req.body);
        console.log(result);

        if(result){
            console.log('sanitization success');
            next();
        }
    }
    catch(err){
       throw new Error(err);
    }
   
}
const sanitizationlogin =  (req,res,next) =>{
    try{
        const result = sanitizationRepo.login(req.body);

        if(result){
            console.log('sanitization success');
            next();
        }
    }
    catch(err){
        throw new Error(err);
    }
}

module.exports = {
    sanitizaAllRepo,
    sanitizationlogin
}