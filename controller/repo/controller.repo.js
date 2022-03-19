const dynamoDbController = require('../../dynamoDB')
const getAllRepo = async(req, res) => {
    try {
        await dynamoDbController.getAllRepo();

    } catch (error) {
        throw new Error(error)
    }
}
const getSignupDetails = async(req, res) => {
    try {
        const response = await dynamoDbController.signupDetail(req, res);
        res.send(response);
    } catch (error) {
        res.send(error);
    }
}

module.exports = {
    getAllRepo,
    getSignupDetails
}