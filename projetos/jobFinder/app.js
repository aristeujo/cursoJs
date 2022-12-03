const express    = require('express');
const exphbs     = require('express-handlebars');
const path       = require('path');
const db         = require('./db/conection');
const bodyParser = require('body-parser');
const Job        = require('./models/Job');
const Sequelize  = require('sequelize');
const { query } = require('express');
const Op         = Sequelize.Op;


const app = express();

const PORT = 3000;

// inicia o projeto na porta
app.listen(PORT, () => {
    console.log(`Servidor está rodando na ${PORT}`);
});

// usando body parser
app.use(bodyParser.urlencoded({extended: false}));

// Pasta de arquivos estáticos
app.use(express.static(path.join(__dirname,'public')));

// handlebars
app.set('views', path.join(__dirname, 'views')); // onde ficam os templates do projeto
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));  // definindo o arquivo principal de layout 
app.set('view engine', 'handlebars'); // define o framework usado para renderizar as views

// db conection
db.authenticate()
    .then(() => {
        console.log("Conectou ao banco com sucesso!")
    })
    .catch((err)=>{
        console.log("Ocorreu um erro ao conectar", err)
});

//routes
app.get("/", (req, res) => {

    let search = req.query.job;
    let query = '%'+search+'%';

    if(!search){
        Job.findAll({
            order: [
                ['createdAt', 'DESC']
            ]})
            .then((jobs)=>{
                res.render("index", {
                    jobs
                });
        })
        .catch(err => console.log(err));
    } else{

    Job.findAll({
        where: {titulo: {[Op.like]: query}},
        order: [
            ['createdAt', 'DESC']
        ]})
        .then((jobs)=>{
            res.render("index", {
                jobs, search
            });
        })
        .catch(err => console.log(err));
    }

  
});

// jobs routes 
app.use('/jobs', require('./routes/jobs'));