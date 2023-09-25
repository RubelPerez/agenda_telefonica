const { checkDuplicatedType } = require("../middlewares/tipo.middleware")
const { onlyNumbers, minimunLenght } = require("../middlewares/validations.middleware")

module.exports = (app) => {
    var router = require("express").Router()
    const tiposController = require("../controllers/tipo.controllers")

    router.get("/get_all_phone_type", tiposController.getAllPhoneType)
    router.get("/get_phone_type_by_id/:id", (req, res, next) => {
        onlyNumbers(req.params.id, res, next)
    }, tiposController.getPhoneTypeByID)
    router.get("/get_phone_type_by_name/:name", (req, res, next) => {
        minimunLenght(req.params.name, res, next)
    }, tiposController.getPhoneTypeByName)
    router.post("/insert_phone_type",checkDuplicatedType, tiposController.insertPhoneType)
    router.put("/update_phone_type",checkDuplicatedType, tiposController.updatePhoneType)
    router.delete("/delete_phone_type", tiposController.deletePhoneType)
    //ruta raiz
    app.use("/api", router)
}