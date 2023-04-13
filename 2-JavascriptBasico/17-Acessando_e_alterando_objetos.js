let personagem = {
    nome: 'Ederson',
    idade: 90,
    pais: 'Brasil',
    olhos: ['preto', 'azul'],
    caracteristicas: {
        forca: 20,
        magia: 5,
        stamina: 15
    }
}

let personagem2 = {
    nome: 'Bonieky',
    idade: 90,
    carros: [
        {modelo: 'Fiat', color: 'preto'},
        {modelo: 'Ferrari', cor: 'vermelho'}
    ]
}

console.log(personagem2.carros[1].modelo)






personagem.nome = 'Pedro';
personagem.caracteristicas.forca += 5;
personagem.olhos.push('verde')

console.log(personagem.olhos)