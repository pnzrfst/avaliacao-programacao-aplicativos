
export default class Livro {
    constructor(titulo: string, autor: string, ISBN: string, tipo: string){
        this.titulo = titulo;
        this.autor = autor;
        this.ISBN = ISBN;
        this.tipo = tipo;
    }
    protected titulo : string;
    protected autor: string;
    protected ISBN: string
    protected tipo: string;

        //Getters
    //------------//

    public getTitulo () : string{
        return this.titulo;
    }

    public getAutor () : string{
        return this.autor;
    }

    public getISBN () : string{
        return this.ISBN;
    }
    
    public setTipo(tipo: string){
        this.tipo = tipo;
    }

    public setISBN(codigoBuscar : string){
        this.ISBN = codigoBuscar;
    }

    mostrarDetalhes(){
        console.log(
            `
            Titulo: ${this.getTitulo()},
            Autor: ${this.getAutor()},
            Código ISBN: ${this.getISBN()}
            `
        )
    }
}