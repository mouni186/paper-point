const joi = require('joi');

const validateAllUserDetails = (data) => {
    const userDetails = {
        "username": data.username,
        "mobileno": data.mobileno,
        "email": data.email,
        "password": data.password
    }
    const schema = joi.object({
        username: joi.string().required(),
        mobileno: joi.number().min(10).required(),
        email: joi.string().email().required(),
        password: joi.string().min(6).max(12).required()
    });
    const result = schema.validate(userDetails);
    if (result.error)
        throw new Error(result.error);
}
const validateAllPost = (data) => {
    const postDetails = {
        "taskname": data.taskname,
        "description":data.description
    }
    const schema = joi.object({
        taskname:joi.string().required(),
        description:joi.string().required()
    });
    const result = schema.validate(postDetails);
    if(result.error)
    throw new Error(result.error);
}

module.exports = {
    validateAllUserDetails,
    validateAllPost
}