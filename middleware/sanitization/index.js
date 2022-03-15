const sanitizationRepo = require('./sanitization.repo/sanitization.js');

const sanitizaAllRepo = (req, res, next) => {
    try{
        const result = sanitizationRepo.allRepo(req.body);
        next();
    }
    catch(err){
       throw new Error(err);
    }
   
}

module.exports = {
    sanitizaAllRepo
}