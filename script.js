const produtos = [
    {id: 1, nome: "Iphone 17 PRO MAX (256GB)", preco: 11879.09, temDesconto: true, quantidade: 1},
    {id: 2, nome: "PC GAMER", preco: 5239.00, temDesconto: false, quantidade: 1},
    {id: 3, nome: "Fone de Ouvido Basike", preco: 65, temDesconto: false, quantidade: 7},
    {id: 4, nome: "Notebook Lenovo CORE I5", preco: 3598.00, temDesconto: true, quantidade: 1},
    {id: 5, nome: "Caixa de Som JBL", preco: 1625.69, temDesconto: false, quantidade: 4},
    {id: 6, nome: "Copo Stanley", preco: 209.89, temDesconto: false, quantidade: 5},
    {id: 7, nome: "Caneta Preta BIC", preco: 3.00, temDesconto: false, quantidade: 89},
    {id: 8, nome: "Mouse Gamer Logitech G PRO X SUPERLIGHT 2", preco: 749.90, temDesconto: true, quantidade: 10},
    {id: 9, nome: "Tênis Nike Air Force 1", preco: 759.90, temDesconto: true, quantidade: 5},
    {id: 10, nome: "Camisa Nike Corinthians I 2025/26 Torcedor Pro Masculina", preco: 140.89, temDesconto: true, quantidade: 40},
    {id: 11, nome: "Capinha de Iphone 13 Azul", preco: 69.90, temDesconto: true, quantidade: 90}
]

// Adiconar + 10 em cada produto
// Filtrar só os em promoção
//Saber qual é o faturamento se vendermos todos em promoção
const faturamentoTotal = produtos
    .map(produto => {
        return{...produto, quantidade: produto.quantidade + 10}
    })
    .filter( produto => produto.temDesconto)
    .reduce(
        (acumulador, produto) => acumulador + (produto.quantidade * produto.preco), 0)

console.log(faturamentoTotal.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}))