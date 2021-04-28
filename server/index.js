require('dotenv').config()
const express = require ('express')
const app = express()
const massive = require('massive')
const session = require('express-session')


const authCtrl = require('./controllers/authController')
const historyCtrl = require('./controllers/historyController')
const videoCtrl = require('./controllers/vidController')
const nodeCtrl = require('./controllers/nodeController')

const verifyUser = require('./middleware/verifyUser')

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET, EMAIL, PASSWORD } = process.env

app.use(express.json())
app.use(
    session({
        saveUninitialized: true,
        resave: false, 
        secret: SESSION_SECRET,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7,
        },
    })
)

//AUTH
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.delete('/auth/logout', authCtrl.logout)
app.get('/auth', authCtrl.getUser)

//YOU TUBE URL
app.get('/api/find', videoCtrl.find)

//HISTORY
app.post('/api/add', historyCtrl.add)
app.delete('/api/remove', historyCtrl.remove)
app.get('/api/get', historyCtrl.get)

//FAVORITES

//NODEMAILER
app.post('/send', nodeCtrl.mailer)


massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false},
}).then((db) => {
    app.set('db', db)
    console.log('db set')
    app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`))
}).catch(err => console.log(err))