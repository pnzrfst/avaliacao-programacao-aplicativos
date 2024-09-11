import Livro from "./Livro";

export default class LivroFisico extends Livro{
    protected numeroPaginas : number;

    constructor(titulo: string, autor: string, ISBN: string, tipo: string, numeroPaginas: number){  
        super(titulo, autor, ISBN, tipo);
        this.numeroPaginas = numeroPaginas;
    }

    public getNumeroPaginas(): number{
        return this.numeroPaginas;
    }

    public override mostrarDetalhes(): void {
        if(this.numeroPaginas <= 0){
            console.log("ERRO: Não foi possivel identificar a quantidade de paginas, por favor, verifique as informaçoes.");
            return
        }

        console.log(
            `
            Titulo: ${this.getTitulo()},
            Autor: ${this.getAutor()},
            Nº de paginas: ${this.getNumeroPaginas()}
            Código ISBN: ${this.getISBN()}
            `
        ) 
    }   
}