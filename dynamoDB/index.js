const CRUDOperationInDynamodb = require('./repo/CRUD.repo')
const { nanoid } = require('nanoid');
const { date } = require('joi');

const getAllRepo = async (req, res) => {
    console.log('getAllRepo Db');
    return true;
}


const signupDetail = async (req, res) => {

    let returnObject;
    const usernanoidgeneration = nanoid(15);


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

    const param = {
        TableName: "user_signup_details",
        Key: {
            email: req.body.email
        }
    };

    const result = await CRUDOperationInDynamodb.getRecordInDynamodb(param);

    if (result.Item) {

        returnObject = {
            "message": "User already exists"
        }

    }
    else {

        await CRUDOperationInDynamodb.createRecordInDynamodb(params);

        returnObject = {
            "message": "User Created Successfully",
            "id": usernanoidgeneration
        }

    }
    return returnObject;
}

const taskDetails = async (req, res) => {
    let returnObject;
    const tasknanoidgeneration = nanoid(8);
    const dateNow = new Date();
    try {
        const params = {
            TableName: "task_details",
            Item: {
                taskname: req.body.taskname,
                duration: req.body.duration,
                towhom: req.body.towhom,
                priority: req.body.priority,
                description: req.body.description,
                date: dateNow.getDate() + "-" + dateNow.getMonth() + "-" + dateNow.getFullYear(),
                time: dateNow.getTime(),
                tasknanoid: tasknanoidgeneration
            }
        };
        await CRUDOperationInDynamodb.createRecordInDynamodb(params);
        returnObject = {
            "message": "Task created successfully",
            "id": tasknanoidgeneration
        }
    } catch (error) {
        returnObject = {
            "message": "Task failed",
            "id": null
        }

    }
    return returnObject;
}
module.exports = {
    getAllRepo,
    signupDetail,
    taskDetails
}