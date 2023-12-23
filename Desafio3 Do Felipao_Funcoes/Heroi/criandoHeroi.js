class criandoHeroi {

    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;

    }



    attack(tipo) {

        let heroiDoTipo = tipo;
        let formaDeAttack;

        switch (heroiDoTipo) {
            case "mago":
                formaDeAttack = "magia"
                break
            case "guerreiro":
                formaDeAttack = "espada"
                break
            case "monge":
                formaDeAttack = "artes marciais"
                break
            case "ninja":
                formaDeAttack = "shuriken"
                break
            default:
                console.log("Esse heroi não existe em nosso cadastro.");
                formaDeAttack = "mão"
                tipo = "Jovem mortal"
                break
        }
        console.log("==========================================")
        
        console.log(`
        
██╗░░██╗███████╗██████╗░░█████╗░██╗
██║░░██║██╔════╝██╔══██╗██╔══██╗██║
███████║█████╗░░██████╔╝██║░░██║██║
██╔══██║██╔══╝░░██╔══██╗██║░░██║██║
██║░░██║███████╗██║░░██║╚█████╔╝██║
╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝░╚════╝░╚═╝
        `)

        console.log("==========================================")
        console.log()
        console.log(`O ${tipo} atacou usando ${formaDeAttack}`)
        console.log()
        console.log("==========================================")
    }
}


let heroi1 = new criandoHeroi("Herbert", 35, "guerreiro")
heroi1.attack("mago")
heroi1.attack("guerreiro")
heroi1.attack("monge")
heroi1.attack("ninja")
heroi1.attack(" ")



