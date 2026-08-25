import inseto from '../service/inseto.js'
import ServiceInseto from '../service/inseto.js'
class ControllerInseto {

    Buscar(_, res) {
        try {
            const insetos = ServiceInseto.Buscar()
            res.send({ message: insetos })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    Detalhe(req, res) {
        try {
            const id = req.params.id
            const inseto = ServiceInseto.Detalhe(id)

            res.send({ message: inseto })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }

    }

    Criar(req, res) {
        try {
            const { id, nome, cor, tamanho } = req.body

            ServiceInseto.Criar(id, nome, cor, tamanho)

            res.send({ message: "cadastrado com sucesso" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }

    }

    Alterar(req, res) {
        try {
            const id = req.params.id
            const { nome, cor, tamanho } = req.query

            ServiceInseto.Alterar(id, nome, cor, tamanho)

            res.send({ message: "alterado com sucesso" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    Deletar(req, res) {
        try {
            const id = req.params.id

            res.send({ message: "deletado com sucesso" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }
}
export default new ControllerInseto()
