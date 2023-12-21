
/*
Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"

*/


console.log("==================================")
console.log()
console.log("Classificador de Nível de Héroi - JS")
console.log()
console.log("==================================")

// =================== Exemplo de uso =====================

// Criando Meu Heroi - Eu Mesmo ;)
let nomeHeroi = "Herbert";

// Pontuação
let xpDoJogador = 7000;

// Chamando minha função que pede um parametro e colocando em uma variável 
let classificacaoDoJogador = determinarClassificacao(xpDoJogador);

// variável com uma mensagem 

let mensagemNaTela = `O Herói de nome **${nomeHeroi}** está no nível de **${classificacaoDoJogador}**.`;

// Imprimindo uma Mensagem 
console.log()
console.log(mensagemNaTela)
console.log()


function determinarClassificacao(xp) {
    let classificacao;

    switch (true) {
        case xp < 1000:
            classificacao = "Ferro";
            break;
        case xp >= 1001 && xp <= 2000:
            classificacao = "Bronze";
            break;
        case xp >= 2001 && xp <= 5000:
            classificacao = "Prata";
            break;
        case xp >= 5001 && xp <= 7000:
            classificacao = "Ouro";
            break;
            case xp >= 7001 && xp <= 8000:
                classificacao = "Platina";
            break;
            case xp >= 8001 && xp <= 9000:
                classificacao = "Ascendente";
            break;
        case xp >= 9001 && xp <= 10000:
            classificacao = "Imortal";
            break;
            default:
            classificacao = "Radiante";
        }

        return classificacao;
    }


