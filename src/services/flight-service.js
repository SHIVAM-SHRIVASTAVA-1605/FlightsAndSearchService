const {FlightRepository, AirplaneRepository} = require('../repository/index');
const {compareTime} = require('../utils/helper');

class FlightService {

    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }

    async createFlight(data) {
        try{
            if(!compareTime(data.aarivalTime, data.departureTime)) {
                throw {error: 'Arrival time cannot be less than deeparture time'};
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({
                ...data, totalseats:airplane.capacity
            });
            return flight;
        } catch (error) {
            console.log("Somthing went wrong at service layer");
            throw {error};
        }
    }

    async getFlightData() {
        // Todo
    }
}

module.exports = FlightService;

/**
 * {
 *  flightNumber,
 *  airplaneId,
 *  arrivalAirportId,
 *  departureAirportId,
 *  arrivalTime,
 *  departureTime,
 *  price,
 *  totalSeats -> Airplane
 * }
 */