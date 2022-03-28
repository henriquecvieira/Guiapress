const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const connection = require("./database/database")
const categoriesController = require("./categories/CategoriesController")
const articlesController = require("./articles/ArticlesController")



app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json())


connection
    .authenticate()
    .then(() => {
        console.log("Sucessfull connection")
    }).catch((errror) => {
        console.log("error")
    })
    


app.use("/", categoriesController)
app.use("/", articlesController)

app.get("/", (req, res) => {
    res.render("index");
})

app.listen(3333, () => {
    console.log("Backend started in http://localhost:3333")
})