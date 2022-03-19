// import xss package
var xss = require("xss");
const sanitizationHelper = require('../helpers/sanitization.helper');

const allRepo = (data) => {

    let userNameBox = data.userName;
    var resust = xss(userNameBox);

    if (resust === userNameBox) {
        return true;
    } else {
        throw new Error('xss attack');
    }

}
const santizeUserDetail = (data) => {
    try {
        sanitizationHelper.xssHelper(data);
        return true;
    } catch (err) {
        console.log(err);
    }

}
const santizeAllPost = (data) => {
    try {
        sanitizationHelper.xssHelper(data);
        return true;
    } catch (err) {
        console.log(err);
    }
}
const santizeUserDetails = (data) => {
    try {
        sanitizationHelper.xssHelper(data);
        return true;
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    allRepo,
    santizeUserDetail,
    santizeAllPost,
    santizeUserDetails
}