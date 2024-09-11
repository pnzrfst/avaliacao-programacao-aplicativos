import leia from "readline-sync"
import Livro from "./Livro";
import LivroFisico from "./LivroFisico";
import Ebook from "./Ebook";

export default class Biblioteca{
    private estoqueBiblioteca: Livro[] = [];
    private livroCadastrado: Livro | null = null;

    public getEstoque(): Livro[]{
        return this.estoqueBiblioteca
    }

    

    public cadastrarLivro(){
        console.log('--------- CADASTRAR LIVROS ----------')
        var titulo = leia.question("Digite o nome do livro: ");
        var autor = leia.question("Digite o autor do livro: ");
        var codISBN = leia.question ("Informe o codigo ISBN: ");
        var tipo = leia.question("Informe o tipo do livro(fisico ou ebook): ");
    

        switch(tipo){
            case "Livro fisico":
                var numeroPaginas = leia.questionInt("Informe o numero de paginas: ");
                this.livroCadastrado = new LivroFisico(titulo, autor, codISBN, tipo, numeroPaginas);
                this.estoqueBiblioteca.push(this.livroCadastrado);
            break

            case "Ebook":
                var tamanhoArquivo = leia.questionInt("Informe o tamanho do arquivo: ");
                this.livroCadastrado = new Ebook(titulo, autor, codISBN, tipo, tamanhoArquivo);
                this.estoqueBiblioteca.push(this.livroCadastrado);
            break
        }
        
    }

    public mostrarEstoque() {
        console.table(this.estoqueBiblioteca);
    }

    public buscarLivro(){
        console.log('--------- BUSCAR LIVROS ----------');

        if(this.livroCadastrado == null){
            console.log("ERRO 204: Por favor, cadastre um livro primeiro.")
        }else{
            var codigoBuscar = leia.question("Informe o codigo ISBN do livro: ");
            for(var i = 0; i < this.estoqueBiblioteca.length; i++){
                if(codigoBuscar == this.estoqueBiblioteca[i].getISBN()){
                    console.log(`${this.livroCadastrado.mostrarDetalhes()}`)
                    return
                }
            }
            console.log('ERRO 304: O codigo fornecido nao retornou nenhum livro, por favor, reveja as informaçoes.');
        }
        
    } 

    public deletarLivros(){
        console.log('--------- DELETAR LIVROS DO ESTOQUE ----------');
        var codigoDeletar = leia.question("Digite o codigo ISBN para deletar o livro selecionado: ");
        for(var i = 0; i < this.estoqueBiblioteca.length; i++){
            if(codigoDeletar === this.estoqueBiblioteca[i].getISBN()){
                this.estoqueBiblioteca.splice(i, 1);
                console.log(`Livro com o codigo ${codigoDeletar} deletado com sucesso.`)
                return;
            }
        }
        
        console.log(`ERRO 404: Não foi encontrado nenhum livro com o codigo fornecido, por favor, verifique as informaçoes.`);
    }
    
}