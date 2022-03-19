const sanitizationRepo = require('./sanitization.repo/sanitization.js');

const sanitizaAllRepo = (req, res, next) => {
    try {
        const result = sanitizationRepo.allRepo(req.body);
        console.log(result);

        if (result) {
            console.log('sanitization success');
            next();
        }
    } catch (err) {
        throw new Error(err);
    }

}
const santizeUser = (req, res, next) => {
    try {
        console.log(req.body);
        const result = sanitizationRepo.santizeUserDetail(req.body);
        if (result) {
            console.log('sanitization success');
            next();
        }
    } catch (err) {
        throw new Error(err);
    }
}
const getAllPost = (req, res, next) => {
    try {
        const result = sanitizationRepo.santizeAllPost(req.body);
        if (result) next();
    } catch (err) {
        throw new Error(err);
    }
}
const santizeUserSignup = (req, res, next) => {
    try {
        const result = sanitizationRepo.santizeUserDetails(req.body);
        console.log(result);
        if (result) {
            console.log("sanitization success");
            next();
        }
    } catch (err) {
        throw new Error(err);
    }
}


module.exports = {
    sanitizaAllRepo,
    santizeUser,
    getAllPost,
    santizeUserSignup
}