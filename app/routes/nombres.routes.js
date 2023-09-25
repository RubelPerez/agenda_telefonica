const { checkDuplicatedNames } = require("../middlewares/nombres.middleware")
const { onlyNumbers, minimunLenght } = require("../middlewares/validations.middleware")
module.exports = (app) => {
    var router = require("express").Router()
    const nombresController = require("../controllers/nombres.controllers")

    router.get("/get_all_name", nombresController.getAllName)
    router.get("/get_user_by_id/:id", (req, res, next) => {
        onlyNumbers(req.params.id, res, next)
    }, nombresController.getUserByID)
    router.get("/get_user_by_name/:name", (req, res, next) => {
        minimunLenght(req.params.name, res, next)
    }, nombresController.getUserByName)
    router.post("/insert_user",checkDuplicatedNames, nombresController.insertUser)
    router.put("/update_user",checkDuplicatedNames, nombresController.updateUser)
    router.delete("/delete_user", nombresController.deleteUser)

    //ruta raiz
    app.use("/api", router)
}