const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require('./config/serverConfig');
const ApiRouters = require('./routes/index');

const db = require('./models/index');

const {City, Airport} = require('./models/index');

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

        // const city =  await City.findOne( {
        //     where: {
        //         id: 1
        //     }
        // });
        // const airports = await city.getAirports();
        // // const newAirport = await Airport.create({
        // //     name: 'Jindal Vijaynagar Airport',
        // //     cityId: 4
        // // });
        // const newAirport = await Airport.findOne({
        //     where: {
        //         id: 4
        //     }
        // })
        // await city.addAirport(newAirport);
        // // await city.addAirport({
        // //     name: 'Jindal Vijaynagar Airport'
        // // })
    });
}

setupAndStartServer();