const sqlite = require('sqlite3').verbose()

const openDatabase = databaseFile => new Promise((resolve, reject) => {
    const db = new sqlite.Database(databaseFile, (err) => {
        if (err) {
            reject(err)
        }else{
            resolve(db)
        }
    })
})

const run = (db, query) => new Promise((resolve, reject) => {
    db.run(query, err => {
        if (err) {
            reject(err)
        }else{
            resolve()
        }
    })
})

const init = async(databaseFile) => {
    const db = await openDatabase(databaseFile)
    // checa se o banco já está criado
    const exists = await query(db, `SELECT name FROM sqlite_master WHERE type = 'table' and name = 'users'`)
    if (exists.length === 0) {
        await run(db, `
            CREATE TABLE users (
                id INTEGER NOT NULL PRIMARY KEY,
                name TEXT,
                email TEXT
            );
        `)
      console.log('Categories Products table were created!');
    }
    console.log(exists);
    return db
}

const query = (db, query) => new Promise((resolve, reject) => {
    db.all(query, (err, rows) => {
        if (err) {
            reject(err)
        }else{
            resolve(rows)
        }
    })
})

const queryWithParams = (db, query, values) => new Promise((resolve, reject) => {
    db.run(query, values, err => {
        if (err) {
            reject(err)
        }else{
            resolve()
        }
    })
})

module.exports = {
    init,
    queryWithParams
}