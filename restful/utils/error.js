const send = (err, req, res, code = 400) => {
    console.log(`error: ${err}`)
    res.status(code).json({
        error: err
    })
}

const validation = (err, req, res, code = 400) => {
    console.log(`error: ${err.array()}`)
    res.status(code).json({
        error: err.array()
    })
}

module.exports = { 
    send,
    validation
}