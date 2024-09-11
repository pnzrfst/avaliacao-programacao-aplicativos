import Livro from "./Livro";
import LivroFisico from "./LivroFisico";
import Ebook from "./Ebook";
import Biblioteca from "./Biblioteca";
import leia from "readline-sync"

var biblioteca = new Biblioteca();


///PROFESSOR, A HORA QUE FOR CRIAR O LIVRO E ESPECIFICAR SE É EBOOK OU LIVRO FISICO, DIGITE Livro Fisico OU Ebook, EU N SOUBE ARRUMAR
//A DIFERENÇA DE MINUSCULAS E MAIUSCULAS. VALEU :)

var opcao = 0;
do {
    console.log("------------MENU------------")
    opcao = leia.keyInSelect(["CADASTRAR LIVROS", "BUSCAR LIVROS", "DELETAR LIVROS", "MOSTRAR ESTOQUE"]) + 1;
    switch (opcao) {
        case 1:
           biblioteca.cadastrarLivro();
            break;
        case 2:
           biblioteca.buscarLivro();
            break;
        case 3: 
           biblioteca.deletarLivros();
            break;
        case 4:
            biblioteca.mostrarEstoque();
    }
} while (opcao !== 0);