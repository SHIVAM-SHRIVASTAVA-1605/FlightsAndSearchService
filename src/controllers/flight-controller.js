const {FlightService} = require('../services/index');
const { SuccessCode } = require('../utils/error-codes');

const flightService = new FlightService();

const create = async (req, res) => {
    try {
        const flightRequestData = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            aarivalTime: req.body.aarivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price
        }

        const flight = await flightService.createFlight(req.body);
        return res.status(SuccessCode.CREATED).json({
            data: flight,
            success: true,
            err: {},
            message: 'Successfully created a flight'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            messsage: 'Not able to create a flight',
            err: error
        });
    }
}

const getAll = async (req, res) => {
    try{
        const response = await flightService.getAllFlightData(req.query);
        return res.status(SuccessCode.OKAY).json({
            data: response,
            success: true,
            err: {},
            message: 'Successfully fetched the flights'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            messsage: 'Not able to fetch the flights',
            err: error
        });
    }
}

module.exports =  {
    create,
    getAll
}