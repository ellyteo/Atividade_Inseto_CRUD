import express from 'express'
import ControllerInseto from '../controller/inseto.js'

const router = express.Router()

router.get("/buscar", ControllerInseto.Buscar)

router.get("detalhe/id:", ControllerInseto.Detalhe)

router.post("/criar", ControllerInseto.Criar)

router.put("/alterar/id:", ControllerInseto.Alterar)

router.delete("/deletar/id:", ControllerInseto.Deletar)


export default router