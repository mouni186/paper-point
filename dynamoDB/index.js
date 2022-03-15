const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
require("dotenv").config();

AWS.config.update({
    region: process.env.AWS_DEFAULT_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const getAllRepo = async (req, res) => {
    console.log('getAllRepo Db');
    return true;
}



const signupDetail = async (user) => {
   
}

module.exports = {
    getAllRepo,
    signupDetail,
}
