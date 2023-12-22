

console.log(`


░█████╗░░█████╗░██╗░░░░░░█████╗░██╗░░░██╗██╗░░░░░░█████╗░██████╗░░█████╗░██████╗░░█████╗░  ██████╗░███████╗
██╔══██╗██╔══██╗██║░░░░░██╔══██╗██║░░░██║██║░░░░░██╔══██╗██╔══██╗██╔══██╗██╔══██╗██╔══██╗  ██╔══██╗██╔════╝
██║░░╚═╝███████║██║░░░░░██║░░╚═╝██║░░░██║██║░░░░░███████║██║░░██║██║░░██║██████╔╝███████║  ██║░░██║█████╗░░
██║░░██╗██╔══██║██║░░░░░██║░░██╗██║░░░██║██║░░░░░██╔══██║██║░░██║██║░░██║██╔══██╗██╔══██║  ██║░░██║██╔══╝░░
╚█████╔╝██║░░██║███████╗╚█████╔╝╚██████╔╝███████╗██║░░██║██████╔╝╚█████╔╝██║░░██║██║░░██║  ██████╔╝███████╗
░╚════╝░╚═╝░░╚═╝╚══════╝░╚════╝░░╚═════╝░╚══════╝╚═╝░░╚═╝╚═════╝░░╚════╝░╚═╝░░╚═╝╚═╝░░╚═╝  ╚═════╝░╚══════╝

██████╗░░█████╗░██████╗░████████╗██╗██████╗░░█████╗░░██████╗
██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝██║██╔══██╗██╔══██╗██╔════╝
██████╔╝███████║██████╔╝░░░██║░░░██║██║░░██║███████║╚█████╗░
██╔═══╝░██╔══██║██╔══██╗░░░██║░░░██║██║░░██║██╔══██║░╚═══██╗
██║░░░░░██║░░██║██║░░██║░░░██║░░░██║██████╔╝██║░░██║██████╔╝
╚═╝░░░░░╚═╝░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░╚═╝╚═════╝░╚═╝░░╚═╝╚═════╝░

██████╗░░█████╗░███╗░░██╗██╗░░██╗███████╗░█████╗░██████╗░░█████╗░░██████╗
██╔══██╗██╔══██╗████╗░██║██║░██╔╝██╔════╝██╔══██╗██╔══██╗██╔══██╗██╔════╝
██████╔╝███████║██╔██╗██║█████═╝░█████╗░░███████║██║░░██║███████║╚█████╗░
██╔══██╗██╔══██║██║╚████║██╔═██╗░██╔══╝░░██╔══██║██║░░██║██╔══██║░╚═══██╗
██║░░██║██║░░██║██║░╚███║██║░╚██╗███████╗██║░░██║██████╔╝██║░░██║██████╔╝
╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝╚═════╝░╚═╝░░╚═╝╚═════╝░
`)

console.log("=============================================================")


// Solicitando ao Jogador os dados para usa-los como parametro de minha função 

let quantidadeVitorias = prompt("Digite a quantidade de Vitorias: ");
let vitoriasDigitadas = parseInt(quantidadeVitorias);

let quantidadeDerrotas = prompt("Digite a quantidade de derrotas: ");
let derrotasDigitadas = parseInt(quantidadeDerrotas);

let situacaoJogador = 0;



//let vitoriasDigitadas = 100;
//let derrotasDigitadas = 20;


// Chamada da minha função

let resultadoFinal = calcularVitoriasJogador(vitoriasDigitadas, derrotasDigitadas)

console.log(`O Heroi tem o saldo de ${situacaoJogador} esta no nível de ${resultadoFinal}`);



// Minha função com 2 parâmetros e sua implemantação com switch case para mostrar a classificação por pontuaço do jogador
// Coloquei um If de segurança para não quebrar com numeros negativos.
console.log()
function calcularVitoriasJogador(vitorias, derrotas) {
    situacaoJogador = vitorias - derrotas;
    let classificacaoDoHeroi;

    // If de segurança
    if (situacaoJogador > 0) {

        switch (situacaoJogador) {
            case situacaoJogador <= 10:
                classificacaoDoHeroi = "Ferro"
                break;
            case situacaoJogador >= 11 && situacaoJogador <= 20:
                classificacaoDoHeroi = "Bronze";
                break;
            case situacaoJogador >= 21 && situacaoJogador <= 50:
                classificacaoDoHeroi = "Prata";
                break;
            case situacaoJogador >= 51 && situacaoJogador <= 80:
                classificacaoDoHeroi = "Ouro";
                break;
            case situacaoJogador >= 81 && situacaoJogador <= 90:
                classificacao = "Diamante";
                break;
            case situacaoJogador >= 91 && situacaoJogador <= 100:
                classificacaoDoHeroi = "Lendário";
                break;

            default:
                classificacaoDoHeroir = "Imortal";
        }

        return classificacaoDoHeroir;

    } else {

        console.log("Os Valores atribuido ao Jogador são inválidos! tente novamente")

    }
    classificacaoDoHeroi(vitorias, derrotas);

}










