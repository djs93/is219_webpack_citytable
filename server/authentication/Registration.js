const cryptoFuncs = require('./CryptoFuncs');
const user = require('./User');

module.exports = class Registration{
    static register(res, req){
        const { email, firstName, lastName, password, confirmPassword } = req.body;

        // Check if the password and confirm password fields match
        if (password === confirmPassword) {

            // Check if user with the same email is also registered
            if (user.UserList.find(user => user.email === email)) {

                res.render('registration', {
                    message: 'User already registered.',
                    messageClass: 'alert-danger'
                });

                return;
            }

            const hashedPassword = cryptoFuncs.getHashedPassword(password);

            // Store user into the database if you are using one
            user.UserList.push({
                firstName,
                lastName,
                email,
                password: hashedPassword
            });

            res.render('login', {
                message: 'Registration Complete. Please login to continue.',
                messageClass: 'alert-success'
            });
        } else {
            res.render('registration', {
                message: 'Password does not match.',
                messageClass: 'alert-danger'
            });
        }
    }
}