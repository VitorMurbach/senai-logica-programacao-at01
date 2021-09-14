let listaPecas = ['peça 1', 'peça 2', 'peça 3', 'peça 4', 'peça 5', 'peça 6',
'peça 7', 'peça 8', 'peça 9', 'peça 10', 'peça 11']
let nomePeca = 'Peça Teste'
let pesoPeca = 300
let podeCadastrar = true

if (pesoPeca < 100){
    console.log('Não há possibilidade de cadastrar')
    podeCadastrar = false
}

if (listaPecas.length > 10){
    console.log('Limite de peças atingido!')
    podeCadastrar = false
}

if (nomePeca.length < 3){
    console.log('Tamanho de letras inferior ao permitido!')
    podeCadastrar = false
}

if (podeCadastrar){
    listaPecas.push(nomePeca)
    console.log('Cadastramento efetuado com sucesso')
} else {
    console.log('Listando problemas para cadastrar a peça')
}

console.log('Listando as peças cadastradas.')
for (let i = 0; i < listaPecas.length; i++){
    console.log(listaPecas[i])
}