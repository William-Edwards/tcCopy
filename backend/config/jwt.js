const userService = require('../routes/users.service');
const { expressjwt: jwt } = require('express-jwt');
const Account = require('../models/account.model');
const RefreshToken = require('../models/refresh-token.model');
require('dotenv').config();

module.exports = authorize;

const secret = process.env.SECRET;

function authorize(roles = []) {
    // roles param can be a single role string (e.g. Role.User or 'User') 
    // or an array of roles (e.g. [Role.Admin, Role.User] or ['Admin', 'User'])
    if (typeof roles === 'string') {
        roles = [roles];
    }

    return [
        // authenticate jwt token and attach user to request object
        jwt({ secret, algorithms: ['HS256'] }),

        // authorize based on role
        async (req, res, next) => {
            const account = await Account.findById(req.auth.id);
            const refreshTokens = await RefreshToken.find({ account: account.id });

            if (!account || (roles.length && !roles.includes(account.role))) {

                return res.status(401).json({ message: 'Unauthorised ' });
            }

            // authentication and authorization successful
            req.auth.role = account.role;
            req.auth.ownsToken = token => !!refreshTokens.find(x => x.token === token);
            next();
        }
    ];
}
