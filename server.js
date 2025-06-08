const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')



const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('public'))

const conexao = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'sua senha aqui',
  database: 'cadastro',
  port: 3306
})


app.get('/usuarios', (req, res) => {
  conexao.query('SELECT * FROM usuarios', (erro, resultados) => {
    if (erro) {
      console.error('Erro no banco:', erro)
      return res.status(500).send('Erro no banco de dados')
    }
    res.json(resultados)
  })
})


app.get('/usuarios/:id', (req, res) => {
  const { id } = req.params
  conexao.query('SELECT * FROM usuarios WHERE id = ?', [id], (erro, resultados) => {
    if (erro) return res.status(500).send(erro)
    if (resultados.length === 0) return res.status(404).send('Usuário não encontrado')
    res.json(resultados[0])
  })
})

app.post('/usuarios', (req, res) => {
  const { nome, profissao, salario } = req.body
  conexao.query(
    'INSERT INTO usuarios (nome, profissao, salario) VALUES (?, ?, ?)',
    [nome, profissao, salario],
    (erro, resultados) => {
      if (erro) {
        console.error('Erro ao inserir usuário:', erro)
        return res.status(500).send('Erro ao inserir usuário no banco')
      }
      res.status(201).json({ id: resultados.insertId, nome, profissao, salario })
    }
  )
})


app.put('/usuarios/:id', (req, res) => {
  const { id } = req.params
  const { nome, profissao, salario } = req.body
  conexao.query(
    'UPDATE usuarios SET nome = ?, profissao = ?, salario = ? WHERE id = ?',
    [nome, profissao, salario, id],
    (erro) => {
      if (erro) return res.status(500).send(erro)
      res.sendStatus(204)
    }
  )
})

app.delete('/usuarios/:id', (req, res) => {
  const { id } = req.params
  conexao.query('DELETE FROM usuarios WHERE id = ?', [id], (erro) => {
    if (erro) return res.status(500).send(erro)
    res.sendStatus(204)
  })
})

app.listen(3000, () => console.log('Servidor rodando na porta 3000'))
