const joi = require('joi');
const validationRepo = require('./validation.repo/validation.js');

const validatorAllRepo = (req, res, next) => {

    try {
        const result = validationRepo.allRepo(req.body);
        next();
    }
    catch (err) {
        throw new Error(err);
    }
}

const validateSignup = (req, res, next) => {

    try {
        const result = validationRepo.validateAllDetails(req.body);
        next();
    }
    catch (err) {
        throw new Error(err);
    }
}

const validateNewTask = (req, res, next) => {

    try {
        const result = validationRepo.validateTask(req.body);
        next();
    }
    catch (err) {
        throw new Error(err);
    }
}

const validateMovetoInprogress = (req, res, next) => {

    try {
        const result = validationRepo.validateMovetoInprogressState(req.body);
        next();
    }
    catch (err) {
        throw new Error(err);
    }
}

const validateMovetoComplete = (req, res, next) => {

    try {
        const result = validationRepo.validateMovetoCompleteState(req.body);
        next();
    }
    catch (err) {
        throw new Error(err);
    }
}

const validateAddComments = (req, res, next) => {

    try {
        const result = validationRepo.validateComments(req.body);
        next();
    }
    catch (err) {
        throw new Error(err);
    }
}


module.exports = {
    validatorAllRepo,
    validateSignup,
    validateNewTask,
    validateMovetoInprogress,
    validateMovetoComplete,
    validateAddComments
}