const ClientErrors = Object.freeze({
    BAD_REQUEST: 400,
    UNAUHORISED: 401,
    NOT_FOUND: 404
});

const ServerErrors = Object.freeze({
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,

});

const SuccessCode = Object.freeze({
    CREATED: 201,
    OKAY: 200
});

module.exports = {
    ClientErrors,
    ServerErrors,
    SuccessCode
};