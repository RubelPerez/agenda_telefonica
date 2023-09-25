const knex = require("../config/db.config")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const secret = "aGeNda"
exports.insertUserLogin = async (req, res) => {
    // insert into login (usuario,clave,nivel) values (body.usuario, encriptado(body.clave), body.nivel)
    const passwordEncrypted = bcrypt.hashSync(req.body.clave, 10)
    const newLoginUser = await knex("login")
        .insert({
            "usuario": req.body.usuario,
            "clave": passwordEncrypted,
            "nivel": req.body.nivel
        }).then(res => {
            return res
        }).catch(err => {
            console.log(err)
        })

    res.send("insercion correcta")
}
exports.deleteUserLogin = async (req, res) => {
    // delete from login where id = body.id
    if (req.nivel == 1) {
        const deleteUser = await knex("login")
            .where({
                "id": req.body.id
            }).del()
            .then(res => {
                return res
            }).catch(err => {
                console.log(err)
            })
        return res.send("Borrado correcto")
    }
    else {
        return res.send("No puedes borrar porque no eres admin")
    }

}

exports.generateToken = async (req, res) => {
    const usuario = req.body.usuario
    const clave = req.body.clave

    const verifyLogin = await knex("login")
        .where({
            usuario
        })
        .then(res => {
            return res[0]
        }).catch(err => {
            console.log(err)
        })

    if (verifyLogin == undefined || verifyLogin == "") {
        return res.send({ "results": "not record found" })
    }
    else {
        bcrypt.compare(clave, verifyLogin.clave, function (err, result) {
            if (result) {
                const payload = { usuario, clave: bcrypt.hashSync(clave, 10) };
                const token = jwt.sign(payload, secret,
                    {
                        expiresIn: "1d"
                    })
                return res.json({ token })
            }
            else {
                return res.send({ "result": false })
            }
        })
    }
}