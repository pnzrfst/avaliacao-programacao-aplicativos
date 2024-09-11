import Livro  from "./Livro";

export default class Ebook extends Livro{
    protected tamanhoArquivo : number;

    constructor(titulo: string, autor: string, ISBN: string, tipo: string, tamanhoArquivo: number){
        super(titulo, autor, ISBN, tipo);
        this.tamanhoArquivo = tamanhoArquivo;
    }

    getTamanhoArquivo() : number{
        return this.tamanhoArquivo;
    }

    public override  mostrarDetalhes(): void {
        if(this.tamanhoArquivo <= 0){
            console.log("ERRO: Não foi possivel identificar um tamanho valido, por favor, verifique as informaçoes.");
            return
        }

        console.log(
            `
            Titulo: ${this.getTitulo()},
            Autor: ${this.getAutor()},
            Código ISBN: ${this.getISBN()}
            Tamanho do arquivo: ${this.getTamanhoArquivo()}
            `
        )
    }

}