const knex = require("../config/db.config")


const checkDuplicatedNumbers = async function (req, res, next) {
    // select * from telefono where numero = body.numero 
    const checkNumbers = await knex("telefono")
        .where({
            "numero": req.body.numero
        }).first()
        .then(res => {
            return res
        })
        .catch(err => {
            console.log(err)
        })

    if (checkNumbers) {
        return res.status(409).send("Data integrity: Duplicated values")
    }
    return next()
}

module.exports = { checkDuplicatedNumbers }