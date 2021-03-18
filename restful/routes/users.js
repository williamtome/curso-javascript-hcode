const db = require('../db')

const create = async(data) => {
    const dbConn = await db.init('./db.sqlite3')
    console.log(data)
    await db.queryWithParams(dbConn, "INSERT INTO users (name, email) VALUES (?, ?);", data)
}

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
        
        // res.json(req.body)
        await create(req.body)
            .catch(err => {
                console.log('Error:',err)
                res.json({
                    status: 400,
                    error: err
                })
            })

    })
}