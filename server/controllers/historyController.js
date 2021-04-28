

module.exports = {
    add: async (req, res) => {
        const db = req.app.get('db')
        const { link } = req.body
        const { id } = req.session.user
        const results = await db.historyadd([ link, id ])
        res.status(200).send(results)
    },
    
    remove: async (req, res) => {
        const { id } = req.session.user
        const removeLink = list.findLink(link => link.id == id)
        list.splice()
    },

    get: async(req, res) => {
        const db = req.app.get('db')
        const { id } = req.session.user
        const history = await db.history.find({ user_id: id })
        res.status(200).send(history)
    }

}