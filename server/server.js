const express = require('express')
const app = express()
const port = 3000

let livros = []

app.use(express.json())

app.get('/livros', (req, res) => {
  res.send(livros)
})

app.post('/livros', (req, res) => {
    // const {  
    //     name,
    //     author,
    //     donor,
    //     contactEmail,
    //     whatsapp,
    //     location,
    // } = req.body

    res.send(`Book created`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})