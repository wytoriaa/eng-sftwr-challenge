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

    //adicionar
    add_book(bookInfo){
        const book_new = new Book(bookInfo.title, bookInfo.author, bookInfo.description)
        this.books.push(book_new)
    }

    //mostrar um
    get_book(){
        return this.books
    }

    //remover
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
}