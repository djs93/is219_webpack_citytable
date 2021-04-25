const crypto = require('crypto');

module.exports = class CryptoFuncs {
    static getHashedPassword = (password) => {
        const sha256 = crypto.createHash('sha256');
        const hash = sha256.update(password).digest('base64');
        return hash;
    }
    static generateAuthToken = () => {
        return crypto.randomBytes(30).toString('hex');
    }
}