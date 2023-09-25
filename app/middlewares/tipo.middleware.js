const knex = require("../config/db.config")


const checkDuplicatedType = async function (req, res, next) {
    // select * from telefono_tipo where tipo = body.tipo 
    const checkType = await knex("telefono_tipo")
        .where({
            "tipo": req.body.tipo
        }).first()
        .then(res => {
            return res
        })
        .catch(err => {
            console.log(err)
        })

    if (checkType) {
        return res.status(409).send("Data integrity: Duplicated values")
    }
    return next()
}

module.exports = { checkDuplicatedType }