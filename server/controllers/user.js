const bcrypt = require('bcryptjs');

module.exports = {
    register: async (req, res) => {

        const db = req.app.get('db');

        const { username, password } = req.body;

        const foundUser = await db.get_user([username]);

        if (foundUser) return res.status(409).send('Sorry, username already exists.');

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const newUser = await db.register_user([username, hash]);

        req.session.user = newUser;

        res.status(200).send(req.session.user);
    },
    login: async (req, res) => {

        const db = req.app.get('db');

        const { username, password } = req.body;

        const foundUser = await db.get_user([username]);

        if (!foundUser) return res.status(409).send('Sorry, username already exists.');

        const isAuthenticated = bcrypt.compareSync(password, foundUser.password);

        if (isAuthenticated) {

            delete foundUser.password;

            req.session.user = foundUser;

            res.status(200).send(req.session.user);
        } else {

            return res.status(401).send('Incorrect username or password');
        }
    },
    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    },
    getUser: (req, res) => {
        req.session.user = foundUser
        if (foundUser) {

        }
        else {
            res.status(404).send('What went wrong')
        }
    }
};