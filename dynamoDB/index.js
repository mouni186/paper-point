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
    const taskNanoidGeneration = nanoid(8);
    const listOfUsers = req.body.towhom.split(",")
    const dateNow = new Date();
    try {
        const params = {
            TableName: "task_details",
            Item: {
                taskname: req.body.taskname,
                duration: req.body.duration,
                towhom: listOfUsers,
                priority: req.body.priority,
                description: req.body.description,
                comments: [],
                date: dateNow.getDate() + "-" + dateNow.getMonth() + "-" + dateNow.getFullYear(),
                time: dateNow.getTime(),
                tasknanoid: taskNanoidGeneration,
                taskStatus: 0
            }
        };
        await CRUDOperationInDynamodb.createRecordInDynamodb(params);
        // send email

        returnObject = {
            "message": "Task created successfully",
            "id": taskNanoidGeneration
        }
    } catch (error) {
        returnObject = {
            "message": "Task failed",
            "id": null
        }

    }
    return returnObject;
}
const moveToInprogress = async (req, res) => {

    let returnObject;
    const taskId = req.body.tasknanoid;

    try {
        const params = {
            TableName: "task_details",
            Key: {
                tasknanoid: taskId
            }
        }

        const result = await CRUDOperationInDynamodb.getRecordInDynamodb(params);

        if (result.Item) {
            if (result.Item.taskStatus == 0) {
                try {

                    const updatedParam = {
                        TableName: "task_details",
                        Key: {
                            tasknanoid: taskId
                        },
                        ConditionExpression: "tasknanoid = :taskId",
                        UpdateExpression: " set taskStatus = :state",
                        ExpressionAttributeValues: {
                            ":taskId": taskId,
                            ":state": 1
                        },
                        ReturnValues: "ALL_NEW"
                    }

                    await CRUDOperationInDynamodb.updateRecordInDynamodb(updatedParam);

                    returnObject = {
                        "message": "Task moved to Inprogress State"
                    }
                }
                catch (error) {
                    console.log(error);
                }
            }
            else {
                returnObject = {
                    "message": "Task already in InProgress State"
                }
            }
        }
    }
    catch (error) {
        console.log(error);
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
    taskDetails,
    moveToInprogress
}






