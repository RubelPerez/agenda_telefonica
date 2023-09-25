const { checkDuplicatedNumbers } = require("../middlewares/numero.middleware")
const { onlyNumbers } = require("../middlewares/validations.middleware")

module.exports = (app) => {
    var router = require("express").Router()
    const numerosController = require("../controllers/numero.controllers")

    router.get("/get_all_phone_numbers", numerosController.getAllNumeros)
    router.get("/get_number_by_id/:id", (req, res, next) => {
        onlyNumbers(req.params.id, res, next)
    }, numerosController.getNumberByID)
    router.get("/get_number_by_user_id/:id", (req, res, next) => {
        onlyNumbers(req.params.id, res, next)
    }, numerosController.getNumberByUserID)
    router.post("/insert_numbers",checkDuplicatedNumbers, numerosController.insertNumber)
    router.put("/update_number",checkDuplicatedNumbers, numerosController.updateNumber)
    router.delete("/delete_number", numerosController.deleteNumber)
    //ruta raiz
    app.use("/api", router)
}