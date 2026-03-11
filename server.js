const express = require('express')
 
const app = express()
 
const PORT = 3000

app.get('/', (req, res) => {
    res.send("<h1>Welcome to My Website</h1>")
})

app.get('/about', (req, res) => {
    res.send("<h1>About Me</h1><p>this page describes me</p>")
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})