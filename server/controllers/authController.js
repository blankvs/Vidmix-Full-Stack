const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req,res) => {

        const db = req.app.get('db')
        const { email, password } = req.body
        console.log(req.body)
        const [existingUser] = await db.existingUser(email)
        console.log(existingUser)
        if (existingUser) {
            return res.status(409).send('user already exists')
        }

        const salt = bcrypt.genSaltSync(10)

        const hash = bcrypt.hashSync(password, salt)

        const newUser = await db.users.insert({ email })

        await db.users_auth.insert({ user_id: newUser.id, hash })

        req.session.user = newUser

        res.status(200).send(req.session.user)
    },

    login: async (req, res) => {
        
        const db = req.app.get('db')
        const { email, password } = req.body
        console.log(req.body)
        const [existingUser] = await db.existingUser(email) 
            console.log(existingUser)
        if (!existingUser) {
            return res.status(404).send('User not found')
        }

        const isAuthenticated = bcrypt.compareSync( password, existingUser.hash )

        if(!isAuthenticated) {
            return res.status(403).send('User not authenticated')
        }
        delete existingUser.hash
        req.session.user = existingUser

        res.status(200).send(req.session.user)
    },

    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    },

    getUser: (req, res) => {
        if (req.session.user) {
            res.status(200).send(req.session.user)
        } else {
            res.sendStatus(200)
        }
    },
}

