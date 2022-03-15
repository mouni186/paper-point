const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const controller = require('./controller/index')
const validator = require('./middleware/validation')
const sanitizer = require('./middleware/sanitization')



app.use(bodyParser.json());

// app.post('/sign-in', validator.userSignIn, controller.userSignup);
app.get('/all-repos', sanitizer.sanitizaAllRepo, validator.validatorAllRepo, controller.allRepo);



// const port = process.env.PORT || 5000;
app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}...`);
})