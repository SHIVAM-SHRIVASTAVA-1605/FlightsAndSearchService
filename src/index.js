const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require('./config/serverConfig');
const ApiRouters = require('./routes/index');

const db = require('./models/index');

// const {City, Airport} = require('./models/index');

const setupAndStartServer = async() => {
    
    //crete the express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', ApiRouters);

    app.listen(PORT, async () => {
        console.log(`Server started at ${PORT}`);
        if(process.env.SYNC_DB) {
            db.sequelize.sync({alter: true});
        }
    });
}

setupAndStartServer();