const express = require("express")
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const port = 3000

app.get("/", (req, res) => {
    res.send("Hola desde index")
})

// nombres
require("./app/routes/nombres.routes")(app)
//numero
require("./app/routes/numero.routes")(app)
// tipo
require("./app/routes/tipo.route")(app)
// login
require("./app/routes/login.route")(app)

app.listen(port, () => {
    console.log("server running in port " + port)
})