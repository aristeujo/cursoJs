const express   = require('express');
const router    = express.Router();
const Job       = require('../models/Job');

// rota de exemplo
router.get('/test', (req, res)=>{
    res.send("Funcionando...");
})

// detalhe da vaga -> view/1, view/2
router.get('/view/:id', (req, res) => Job.findOne({
     where: {id: req.params.id}
}).then(job => {
     res.render('view', {
          job
     });
}).catch(err => console.log(err)));


// form da rota de envio
router.get('/add', (req, res)=>{
     res.render('add');
});

// add job via post
router.post('/add', (req, res)=>{
   let {titulo, descricao, salario, empresa, email, new_job} = req.body;

   // inserir dados no banco
   Job.create({
        titulo, 
        descricao, 
        salario, 
        empresa, 
        email, 
        new_job
   }).then(()=>{
        res.redirect('/');
   })
   .catch((err)=>{
        console.log(err);
   });

});

module.exports = router; // exporta as rotas criadas nesse arquivo
