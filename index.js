const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const connection = require("./database/database")
const session = require("express-session")




//sessions
app.use(session({
    secret: "qualquercoisa", cookie: {maxAge: 30000}
}))

//View wngine
app.set('view engine', 'ejs')

// Static
app.use(express.static('public'))

//Body parser
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json())


connection
    .authenticate()
    .then(() => {
        console.log("Sucessfull connection")
    }).catch((error) => {
        console.log("error")
    })
    

app.use("/", categoriesController);
app.use("/", articlesController);
app.use("/", usersController);


app.get("/", (req, res) => {
    Article.findAll({
       order:[
           [ 'id', 'DESC']
        ],
        limit: 4
    }).then(articles => {
        Category.findAll().then(categories => {
            res.render("index", {articles: articles, categories: categories})
        })       
    })
})


app.get("/:slug",(req, res) => {
    var slug = req.params.slug;

    Article.findOne({
        where: {
            slug: slug
        }
        
    }).then(article => {
        if(article != undefined){
            Category.findAll().then(categories => {
                res.render("article", {article: article, categories: categories});
            });
        }else{
        res.redirect("/");
    }
    }).catch( err => {
        res.redirect("/");
    });
})

app.get("/category/:slug", (req, res) => {
    var slug = req.params.slug;
    Category.findOne({
        where: {
            slug: slug
        },
        include: [{model: Article}]
    }).then( category => {
        if(category != undefined){
            
            Category.findAll().then(categories => {
                res.render("index",{articles: category.articles, categories: categories});

            });
        }else{
            res.redirect("/");

        }
    }).catch( err => {
            res.redirect("/");
    })
})


app.listen(3333, () => {
    console.log("Backend started in http://localhost:3333")
})