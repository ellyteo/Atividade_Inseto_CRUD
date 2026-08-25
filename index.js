import express from 'express'

const app = express()

app.use(express.json())

app.use("/api/v1/inseto", inseto)

app.listen(3000, () => {
    console.log("Servidor funcionando na porta 3000")
})