const auth = require("../middlewares/auth.middleware")

module.exports = (app) => {
    var router = require("express").Router()
    const loginController = require("../controllers/login.controllers")
    router.post("/insert_login", loginController.insertUserLogin)
    router.delete("/delete_user_login", auth, loginController.deleteUserLogin)
    router.post("/login", loginController.generateToken)

    //ruta raiz
    app.use("/api", router)
}