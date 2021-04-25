const cryptoFuncs = require('./CryptoFuncs');
const userData = require('./User');

module.exports = class Login{
    static login(res, req){
        const { email, password } = req.body;
        const hashedPassword = cryptoFuncs.getHashedPassword(password);

        const user = userData.UserList.find(u => {
            return u.email === email && hashedPassword === u.password
        });

        if (user) {
            const authToken = cryptoFuncs.generateAuthToken();

            // Store authentication token
            userData.authTokens[authToken] = user;

            // Setting the auth token in cookies
            res.cookie('AuthToken', authToken);

            // Redirect user to the protected page
            res.redirect('/protected');
        } else {
            res.render('login', {
                message: 'Invalid username or password',
                messageClass: 'alert-danger'
            });
        }
    }
}