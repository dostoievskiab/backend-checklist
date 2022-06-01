const express = require('express');
const app = express();
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./utils/swagger.json');
require('dotenv').config();

app.use(express.json());
app.use(cors({ origin: ['*'] }));

if (process.env.NODE_ENV != 'production') { swaggerDocument.host = 'localhost:' + process.env.PORT }
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(require('./routes'));

// TODO: Need a better error handling 
app.use(function (err, req, res, next) {
    console.log(err)
    res.status(500).json({ msg: 'Internal Error. Please contact the administrator.'})
})

module.exports = app;