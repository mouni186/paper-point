const dynamoDbController = require('../../dynamoDB')

const getAllRepo = async (req, res) => {

    try {
        await dynamoDbController.getAllRepo();

    }
    catch (error) {
        throw new Error(error)
    }
}

const getSignupDetails = async (req, res) => {

    try {
        const response = await dynamoDbController.signupDetail(req, res);
        res.send(response);
    }
    catch (error) {
        res.send(error);
    }
}

const newTaskDetails = async (req, res) => {

    try {
        const response = await dynamoDbController.taskDetails(req, res);
        res.send(response);
    }
    catch (error) {
        res.send(error);
    }
}

const moveToInprogressDetails = async (req, res) => {

    try {
        const response = await dynamoDbController.moveToInprogress(req, res);
        res.send(response);
    }
    catch (error) {
        res.send(error)
    }
}

const moveToCompleteDetails = async (req, res) => {

    try {
        const response = await dynamoDbController.moveToComplete(req, res);
        res.send(response);
    }
    catch (error) {
        res.send(error)
    }
}

const addCommentstoTask = async (req, res) => {

    try {
        const response = await dynamoDbController.addComments(req, res);
        res.send(response);
    }
    catch (error) {
        res.send(error)
    }
}

const deleteCommentbyId = async (req, res) => {

    try {
        const response = await dynamoDbController.deleteComments(req, res);
        res.send(response);
    }
    catch (error) {
        res.send(error)
    }
}


module.exports = {
    getAllRepo,
    getSignupDetails,
    newTaskDetails,
    moveToInprogressDetails,
    moveToCompleteDetails,
    addCommentstoTask,
    deleteCommentbyId
}