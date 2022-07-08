const userService = require('../routes/users.service');
const { expressjwt: expressJwt } = require('express-jwt');
require('dotenv').config();

module.exports = jwt;

const secret = process.env.SECRET;

function jwt() {
    return expressJwt({ secret, algorithms: ['HS256'], isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            '/users/authenticate',
            '/users/register'
        ]
    });
}

async function isRevoked(req, token) {
    const user = await userService.getById(token.payload.sub);

    // revoke token if user no longer exists
    if (!user) {
        return true;
    }

};
