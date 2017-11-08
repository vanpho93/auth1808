const express = require('express');
const jsonParser = require('body-parser').json();
const { createToken } = require('./lib/jwt');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
    next();
});

class UserInfo {
    constructor(email, password, name) {
        this.email = email;
        this.password = password;
        this.name = name;
    }
}

const users = [
    new UserInfo('teo@g.com', '123', 'Teo'),
    new UserInfo('ti@g.com', '123', 'Ti'),
    new UserInfo('tun@g.com', '123', 'Tun')
]

app.post('/signin', jsonParser, async (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => {
        return u.email === email && u.password === password;
    });
    if(!user) return res.status(400).send({ message: 'Check user info' });
    const token = await createToken({ email });
    res.status(200).send({ email, name: user.name, token });
});

app.listen(3000, () => console.log('Server started!'));