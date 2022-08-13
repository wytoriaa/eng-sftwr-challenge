const { title } = require("process")

//Crie uma classe Book 
class Book{
    constructor(title, author, description){
        this.title = title
        this.author = author
        this.description = description
    }

    add_ID(id){
        this.id = id
    }
}

//Crie uma classe Library com a seguinte propriedade:
class Library{
    constructor(){
        this.books = []
    }

    //adicionar um livro
    add_book(bookInfo){
        const book_new = new Book(bookInfo.title, bookInfo.author, bookInfo.description)
        this.books.push(book_new)
    }

    //listar todos os livros
    get_book(){
        return this.books
    }

    //remover um livro
    remove_book_id(bookID){
        let removeBook 
        this.books = this.books.filter(book =>{
            if(book.id === bookID){
                removeBook = book
            } else{
                return book
            }
        })
        return removeBook
    }

    //mostrar um livro
    get_book_id(bookID){
        let yourBook
        this.books = this.books.filter(book =>{
            if (book.id === bookID){
                yourBook = book
            } else{
                return book
            }
        })
    }

    //editar um livro
    update_book_id(id, info = {}){
        let updateBook = this.get_book_id(id)
        this.books = this.books.filter(book =>{
            if(book.id === id){
                book.title = info.title
                book.description = info.description
                book.author = info.author
                return book
            }
        })
        return updateBook
    }
}

let library = new Library
var book1 = new Book("O ceifador", "Neal", "Distopia")
library.add_book(book1)

var book2 = new Book ("Torto Arado", "Itamar Vieira", "Brasil atemporal")
library.add_book(book2)
library.get_book()
library.remove_book_id(1)
library.update_book_id(1, {title: "Os Testamentos", description: "Distopia", author: "Margaret"})
console.log(book2)