const NeDB = require('nedb')
const db = new NeDB({
    filename: 'users.db',
    autoload: true
})

module.exports = app => {
    app.get('/users', (req, res) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.json({
            users: [{
                name: 'William',
                email: 'contato@williamtome.dev',
                id: 1
            }]
        })
    })
    
    app.post('/users', async(req, res) => {
        
        db.insert(req.body, (err, user) => {
            if(err){
                console.log('Error:',err);
                res.status(400).json({
                    error: err
                })
            } else {
                res.status(200).json(user)
            }
        })

    })
}