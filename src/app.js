const express = require('express');
require('dotenv').config();
const connectionDB = require('./database');
const CheckDataBaseConnectionService  = require('./database/services/CheckDataBaseConnectionService');

const app = express();

app.use('/simulator',require('./shared/http/routes/simulation.routes'));

const port = process.env.PORT || 3000;

app.listen(port, async()=>{
    console.log(`server is running on port ${port}`);
    const checkConnectionDB = new CheckDataBaseConnectionService();
    await checkConnectionDB.execute(connectionDB);
});