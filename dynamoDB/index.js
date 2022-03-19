const CRUDOperationInDynamodb = require('./repo/CRUD.repo')
const { nanoid } = require('nanoid');

const getAllRepo = async(req, res) => {
    console.log('getAllRepo Db');
    return true;
}



const signupDetail = async(req, res) => {
    const usernanoidgeneration = nanoid(15);
    try {

        const params = {
            TableName: "user_signup_details",
            Item: {
                username: req.body.username,
                mobileno: req.body.mobileno,
                email: req.body.email,
                password: req.body.password,
                usernanoid: usernanoidgeneration
            }
        };
        console.log(params);
        await CRUDOperationInDynamodb.createRecordInDynamodb(params);
        return ({
            "message": "User Created Successfully",
            "id": usernanoidgeneration
        })
    } catch (error) {
        return ({
            "message": "Un-authorized User",
            "id": null
        })
    }
}
module.exports = {
    getAllRepo,
    signupDetail
}