const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const controller = require('./controller/index')
const validator = require('./middleware/validation')
const sanitizer = require('./middleware/sanitization')



app.use(bodyParser.json());

// app.post('/sign-in', validator.userSignIn, controller.userSignup);
app.get('/all-repos', sanitizer.sanitizaAllRepo, validator.validatorAllRepo, controller.allRepo);
app.post('/user-login',sanitizer.sanitizationlogin,validator.validatorlogin);


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`listening on port ${port}...s`);
})