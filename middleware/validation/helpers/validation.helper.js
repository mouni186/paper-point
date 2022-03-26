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

const validateAllTask = (data) => {

    const taskDetails = {
        "taskname": data.taskname,
        "description": data.description
    }

    const schema = joi.object({
        taskname: joi.string().required(),
        description: joi.string().required()
    });
    const result = schema.validate(taskDetails);

    if (result.error)
        throw new Error(result.error);
}

const validateInprogressState = (data) => {

    const progressState = {
        "tasknanoid": data.tasknanoid
    }

    const schema = joi.object({
        tasknanoid: joi.string().min(8).required()
    });
    const result = schema.validate(progressState);

    if (result.error)
        throw new Error(result.error);
}

const validateTaskComments = (data) => {

    const taskComments = {
        "tasknanoid": data.tasknanoid,
        "comments": data.comments
    }

    const schema = joi.object({
        tasknanoid: joi.string().min(8).required(),
        comments: joi.string().required()
    });
    const result = schema.validate(taskComments);

    if (result.error)
        throw new Error(result.error);
}



module.exports = {
    validateAllUserDetails,
    validateAllTask,
    validateInprogressState,
    validateTaskComments
}