"use strict"
const myLibrary = []

function Books(author, title, pages, id){
    this.author = author
    this.title = title
    this.pages = pages
    this.id = id
    this.readStatus = 'Not Read'
}

Books.prototype.changeReadStatus = function(status){
    this.readStatus = status
}

function addBookToLibrary(author, title, pages){
    const id = crypto.randomUUID()
    const book = new Books(author, title, pages, id)

    myLibrary.push(book)
}

function displayBooks(){
    myLibrary.forEach(book => console.log(book))
}

addBookToLibrary('J K Rowling', 'Harry Potter and the half blood prince', 523)
addBookToLibrary('J K Rowling', 'Harry Potter and the prisoner of Azkaban', 323)
addBookToLibrary('J K Rowling', 'Harry Potter and the Deathly Hallows', 583)

export {
    displayBooks,
    addBookToLibrary,
    myLibrary,
}