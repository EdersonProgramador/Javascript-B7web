let pessoa = {
    nome: 'Ederson',
    sobrenome: 'Samuel',
    idade: 90,
        nomeCompleto: function() {
            return `${this.nome} ${this.sobrenome}`;
        }
}

console.log(pessoa.nomeCompleto());