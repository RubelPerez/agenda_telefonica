const knex = require("../config/db.config")

exports.getAllPhoneType = async (req, res) => {
    // select * from telefono_tipo
    const telefonos_tipo = await knex("telefono_tipo")
        .then(res => {
            return res
        }).catch(err => {
            console.log(err)
        })
    res.send(telefonos_tipo)
}


exports.getPhoneTypeByID = async (req, res) => {
    // select * from telefono_tipo where id = :id
    const telefonos_tipo = await knex("telefono_tipo")
        .where({ "id": req.params.id })
        .then(res => {
            return res
        }).catch(err => {
            console.log(err)
        })
    res.send(telefonos_tipo)
}

exports.getPhoneTypeByName = async (req, res) => {
    // select * from telefono_tipo where tipo like '%:name%'
    const telefonos_tipo = await knex("telefono_tipo")
        .where("tipo", 'like', `%${req.params.name}%`)
        .then(res => {
            return res
        }).catch(err => {
            console.log(err)
        })
    res.send(telefonos_tipo)
}


exports.insertPhoneType = async (req, res) => {
    const newPhoneType = await knex("telefono_tipo")
        .insert({
            "tipo": req.body.tipo,
        }).then(res => {
            return res
        }).catch(err => {
            console.log(err)
        })

    res.send("insercion correcta de Tipo telefonico")
}


exports.updatePhoneType = async (req, res) => {
    /* 
    update telefono_tipo set 
        tipo = body.tipo        
        where id = body.id
    
    */
    const updatePhone = await knex("telefono_tipo")
        .update({
            "tipo": req.body.tipo,

        }).where({ "id": req.body.id }).then(res => {
            return res
        }).catch(err => {
            console.log(err)
        })

    res.send("actualizacion correcta de Tipo de telefono")
}


exports.deletePhoneType = async (req, res) => {
    /* 
    delete from  telefono_tipo where id = body.id
    
    */
    const deletePhone = await knex("telefono_tipo")
        .where({ "id": req.body.id }).del().then(res => {
            return res
        }).catch(err => {
            console.log(err)
        })

    res.send("Borrado correcto de Tipo de telefono")
}