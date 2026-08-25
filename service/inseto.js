import RepositoryInseto from "../repository/inseto.js"
class ServiceInseto {

    Buscar() {
        return RepositoryInseto
    }

    Detalhe(id) {
        if (!id) {
            throw new Error("Favor informar id")
        }

        const inseto = RepositoryInseto.find(it => it.id === id)

        if (!inseto) {
            throw new Error("Inseto não encontrado")
        }

        return inseto
    }

    Criar(id, nome, cor, tamanho) {
        if (!id || !nome || !cor || !tamanho) {
        throw new Error("Informar todos os dados")
    }

    RepositoryInseto.push({ id, nome, cor, tamanho })

    return { id, nome, cor, tamanho }
}

Alterar(id) {
    if (!id) {
        throw new Error("Favor informar id")
    }
    
    const inseto = RepositoryInseto.find(it => it.id === id)
    
    if(!inseto) {
        throw new Error("Inseto não encontrado")
    }
    inseto.nome = nome
    inseto.cor = cor
    inseto.tamanho = tamanho

    return inseto
}

Deletar(id) {
    if (!id) {
        throw new Error("Favor informar id")
    }

    RepositoryInseto.splice(it => it.id === id, 1)

    return id
}

}
export default new ServiceInseto()