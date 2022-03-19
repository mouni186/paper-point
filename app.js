const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const controller = require('./controller/index')
const validator = require('./middleware/validation')
const sanitizer = require('./middleware/sanitization')



app.use(bodyParser.json());
app.get('/all-repos', sanitizer.sanitizaAllRepo, validator.validatorAllRepo, controller.allRepo);
app.get('/user-detail', sanitizer.santizeUser);
app.get('/get-all-post', sanitizer.getAllPost);
// main route
app.post('/user-signup', sanitizer.santizeUserSignup, validator.validateSignup, controller.userSignup);


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`listening on port ${port}...s`);
})