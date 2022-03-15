const dynamoDbController = require('../../dynamoDB')
const getAllRepo = async(req, res) => {
    try {
        await dynamoDbController.getAllRepo();
       
    } catch (error) {
       throw new Error(error)
    }
}

module.exports = {
    getAllRepo
}