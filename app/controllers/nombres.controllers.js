const knex = require("../config/db.config")

exports.getAllName = async (req, res) => {
    // select * from nombres
    const nombre = await knex("nombre")
        .then(res => {
            return res
        }).catch(err => {
            console.log(err)
        })
    res.send(nombre)
}

exports.getUserByID = async (req, res) => {
    // select * from nombre where id = :id
    const nombre = await knex("nombre")
        .where({ "id": req.params.id })
        .then(res => {
            return res
        }).catch(err => {
            console.log(err)
        })
    res.send(nombre)
}

exports.getUserByName = async (req, res) => {
    // select * from nombre where name like '%:name%'
    const nombre = await knex("nombre")
        .where("nombre", 'like', `%${req.params.name}%`)
        .then(res => {
            return res
        }).catch(err => {
            console.log(err)
        })
    res.send(nombre)
}


exports.insertUser = async (req, res) => {
    // insert into nombre(nombre,apellido) values (body.nombre,body.apellido)
    const newUser = await knex("nombre")
        .insert({
            "nombre": req.body.nombre,
            "apellido": req.body.apellido
        }).then(res => {
            return res
        }).catch(err => {
            console.log(err)
        })

    res.send("insercion correcta")
}


exports.updateUser = async (req, res) => {
    // update nombre set nombre = body.nombre, apellido =body.apellido where id = body.id
    const updateUser = await knex("nombre")
        .update({
            "nombre": req.body.nombre,
            "apellido": req.body.apellido
        }).where({ "id": req.body.id }).then(res => {
            return res
        }).catch(err => {
            console.log(err)
        })

    res.send("actualizacion correcta")
}

exports.deleteUser = async (req, res) => {
    // delete from nombre where id = req.id
    const deleteUser = await knex("nombre")
        .where({ "id": req.body.id }).del()
        .then(res => {
            return res
        }).catch(err => {
            console.log(err)
        })

    res.send("Borrado correcto")
}