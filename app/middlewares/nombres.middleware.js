const knex = require("../config/db.config")


const checkDuplicatedNames = async function (req, res, next) {
    // select * from nombres where nombre = body.nombre and apellido = req.apellido
    const checkNames = await knex("nombre")
        .where({
            "nombre": req.body.nombre,
            "apellido": req.body.apellido
        }).first()
        .then(res => {
            return res
        })
        .catch(err => {
            console.log(err)
        })

    if (checkNames) {
        return res.status(409).send("Data integrity: Duplicated values")
    }
    return next()
}

module.exports = { checkDuplicatedNames }