const knex = require("../config/db.config")

exports.getAllNumeros = async (req, res) => {
    // select * from telefono
    const telefonos = await knex("telefono")
        .then(res => {
            return res
        }).catch(err => {
            console.log(err)
        })
    res.send(telefonos)
}


exports.getNumberByID = async (req, res) => {
    // select * from telefono where id = :id
    const telefonos = await knex("telefono")
        .where({ "id": req.params.id })
        .then(res => {
            return res
        }).catch(err => {
            console.log(err)
        })
    res.send(telefonos)
}

exports.getNumberByUserID = async (req, res) => {
    // select * from telefono where id = :id
    const telefonos = await knex("telefono")
        .where({ "nombre_id": req.params.id })
        .then(res => {
            return res
        }).catch(err => {
            console.log(err)
        })
    res.send(telefonos)
}

exports.insertNumber = async (req, res) => {
    const newNumber = await knex("telefono")
        .insert({
            "nombre_id": req.body.nombre_id,
            "numero": req.body.numero,
            "tipo_id": req.body.tipo_id
        }).then(res => {
            return res
        }).catch(err => {
            console.log(err)
        })

    res.send("insercion correcta de numero telefonico")
}

exports.updateNumber = async (req, res) => {
    /* 
    update telefono set 
        nombre_id = body.nombre_id,
        numero=body.numero,
        tipo_id =body.tipo_id 
        where id = body.id
    
    */
    const updateNumber = await knex("telefono")
        .update({
            "nombre_id": req.body.nombre_id,
            "numero": req.body.numero,
            "tipo_id": req.body.tipo_id,
        }).where({ "id": req.body.id }).then(res => {
            return res
        }).catch(err => {
            console.log(err)
        })

    res.send("actualizacion correcta de telefono")
}


exports.deleteNumber = async (req, res) => {
    /* 
    delete from telefono where id = body.id
    
    */
    const deleteNumber = await knex("telefono")
        .where({ "id": req.body.id }).del()
        .then(res => {
            return res
        }).catch(err => {
            console.log(err)
        })

    res.send("Borrado correcto de telefono")
}