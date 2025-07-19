"use strict"

import {addBookToLibrary, displayBooks, myLibrary as library} from "./script.js"

const author = document.getElementById('author-inp')
const title = document.getElementById('title-inp')
const pages = document.getElementById('pages-inp')

const form = document.getElementById('form')
const dialog = document.getElementById('add-book')
const addBookBtn = document.getElementById('add-book-btn')
const cancelBtn = document.getElementById('cancel-btn')
const showBooksBtn = document.getElementById('show-book-btn')

const booksContainer = document.getElementById('books-div')

let myLibrary = library

form.addEventListener('submit', (e) => {
    e.preventDefault()

    addBookToLibrary(author.value, title.value, pages.value)
    dialog.close()

    clearFormControls()
})

function clearFormControls(){
    author.value = ''
    title.value = ''
    pages.value = ''
}

addBookBtn.addEventListener('click', () => {
    clearBooksContainer()
    clearFormControls()
    dialog.show()
})

cancelBtn.addEventListener('click', () => {
    dialog.close()
})

function clearBooksContainer(){
    booksContainer.innerHTML = ''
}

function deleteBook(id){
    myLibrary = myLibrary.filter(book => book.id !== id)
    clearBooksContainer()
    showBooks()
}

showBooksBtn.addEventListener('click', () => {
    clearBooksContainer()
    showBooks()
})

function showBooks(){
    myLibrary.forEach(book => {
        
        const div = document.createElement('div')
        booksContainer.appendChild(div)
        div.classList.add('book-div')

        for (let key in book){
            if(key !== 'id' && key !== 'readStatus' && book.hasOwnProperty(key)){
                const p = document.createElement('p')
                p.textContent = book[key]
                div.appendChild(p)
            }
        }
        const delBtn = document.createElement('button')
        delBtn.textContent = 'Delete Book'

        delBtn.addEventListener('click', () => {
            deleteBook(book.id)
        })

        const selectStatus = document.createElement('select')
        const read = document.createElement('option')
        const notRead = document.createElement('option')
        const reading = document.createElement('option')

        read.textContent = 'Read'
        read.value = 'Read'

        notRead.textContent = 'Not Read'
        notRead.value = 'Not Read'

        reading.textContent = 'Reading'
        reading.value = 'Reading'

        selectStatus.appendChild(read)
        selectStatus.appendChild(notRead)
        selectStatus.appendChild(reading)

        selectStatus.value = book.readStatus

        selectStatus.addEventListener('change', e => {
            book.changeReadStatus(e.target.value)
        })

        div.appendChild(delBtn)
        div.appendChild(selectStatus)
    })
}
