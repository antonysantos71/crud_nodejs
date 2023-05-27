const express = require('express');
const app = express();

app.use(express.json());

const pessoa = [];


app.get('/contato',  (req, res) => {
  res.json(pessoa);
});

app.get('/contato/:_id',  (req, res) => {
  const {_id} = req.params;
  return res.json({
    user: pessoa[_id]
  });
});

app.post('/contato',  (req, res) => {
  const {name , age} = req.body;
  pessoa.push({
    name,
    age
  });
  return res.json({
    mensage: "usuario adicinado",
    user: {
      name,
      age
    }
  });
});

app.put('/contato/:_id',  (req, res) => {
  const {_id} = req.params;
  const {name , age} = req.body;
  pessoa[_id] = {name, age};
  return res.json({
    mensage: "usuario atualizado",
    user: {
      name,
      age
    }
  })
});

app.delete('/contato/:id',  (req, res) => {
  const {id} = req.params;
  pessoa.splice(id, 1);
  return res.json({
    mensage: "usuario deletado",
  })
});

app.listen(8080,() =>{
    console.log("Servidor iniciado na porta 8080: http://localhost:8080/ ");
});
