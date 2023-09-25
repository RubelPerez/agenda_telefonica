const jwt = require("jsonwebtoken")
const knex = require("../config/db.config")

const secret = "aGeNda"

const auth = async function (req, res, next) {
    const token = req.header("Authorization");
    if (!token) {
        return   res.status(401).send("unauthorized: no Token Provided")
    }
    else {
        jwt.verify(token, secret, async function (err, decoded) {
            if (err) {
                return res.status(401).send("unauthorized: invalid token")
            }
            else {
                const session = await knex("login")
                    .where({ usuario: decoded.usuario })
                    .then(res => {
                        return res[0]
                    })
                    .catch(err => {
                        console.log(err)
                    })

                req.id = session.id
                req.usuario = session.usuario
                req.nivel = session.nivel
                next()
            }

        })
    }
}

module.exports = auth