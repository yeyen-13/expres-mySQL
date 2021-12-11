const express = require ("express")
const app = express()
const PORT = process.env.PORT || 3000
const allRoutes = require("./routers")
app.use(express.json())
app.use(allRoutes)
app.listen(PORT, ()=>{
    console.log("server running on port " + PORT)
})