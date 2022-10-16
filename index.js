const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const connection = require("./database/database");
const Aluno = require("./database/Tb_alunos"); //model
//Database

connection
  .authenticate()
  .then(()=>{
    console.log("conexão feita com banco de dados!")
  })
  .catch((msgErro) => {
    console.log(msgErro);
  })

// Estou dizendo pro express usar o ejs como view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));
//Body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
//rotas
app.get("/",(req, res) => {
  Aluno.findAll({raw:true}).then(alunos => {
    res.render("index",{
      alunos:alunos
    });
  });
});

app.get("/cadastrar",(req, res) => {
  res.render("cadastrar");
});

app.post("/resultado", (req, res) => {
  var nome = req.body.nome;
  var nota1 = req.body.nota1;
  var nota2= req.body.nota2;
  Aluno.create({
    nome: nome,
    nota1: nota1,
    nota2: nota2
  }).then(() => {
    res.redirect("/");
  })
})

app.listen(8080, ()=>{console.log("rodando")});
