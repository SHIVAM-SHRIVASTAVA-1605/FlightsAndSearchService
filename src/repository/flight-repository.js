const {Flights} = require('../models/index');
const {Op, where} = require ('sequelize');

class FlightRepository {

    #createFilter(data) {
        let filter = {};
        if(data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId;
        }
        // if(data.minPrice && data.maxPrice) {
        //     Object.assign(filter, {
        //         [Op.and]: [
        //             { price: {[Op.lte]: data.maxProce} },
        //             { price: {[Op.gte]: data.minPrice} }
        //         ]
        //     })
        // }

        let priceFilter = [];

        if(data.minPrice) {
            // Object.assign(filter, {price: {[Op.gte]: data.minPrice}});
            priceFilter.push({price: {[Op.gte]: data.minPrice}});
        }
        if(data.maxprice) {
            // Object.assign(filter, {price: {[Op.lte]: data.maxprice}});
            priceFilter.push({price: {[Op.lte]: data.maxprice}});
        }
        Object.assign(filter, {[Op.and]:priceFilter});
        // Object.assign(filter, {[Op.and]: [{price: {[Op.lte]: 7000}}, {price: {[Op.gte]: 4000}}]})
        console.log(filter);
        return filter;
    }

    async createFlight(data) {
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getFlight(flightId) {
        try {
            const flight = await Flights.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getAllFlights(filter) {
        try {
            const filterObject =  this.#createFilter(filter);
            const flight = await Flights.findAll({
                where: filterObject
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
}

module.exports = FlightRepository;

/**
 {
    where: {
        arrivalAirportId: 2,
        departureAirportId: 4,
        price: {[Op.gte]: 400}
    }
 }
 */