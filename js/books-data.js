const BOOKS_STORAGE_KEYS = 'BOOKS'
let books = []
let bookId = 0

function isStorageExist() {
    if(typeof(Storage) === undefined){
        console.error('browser tidak mendukung local storage')
        return false
    }
    return true
}

function saveBooksToStorage() {
    const data = JSON.stringify(books)
    
    localStorage.setItem(BOOKS_STORAGE_KEYS, data)
    
    document.dispatchEvent(new Event('onbookchanged'))
}

function addBookData(book) {
    books.push(book)
    
    if (isStorageExist()) {
        saveBooksToStorage()
        console.log('sukses menambah books data, id : ', book.id)
        return
    }

    console.error('gagal menambah books data, id : ', book.id)
}

function deleteBooksById(id) {
    const booksIndex = books.findIndex(((books) => {
        return books.id === id
    }))

    if (booksIndex !== -1) {
        books.splice(booksIndex, 1)
        saveBooksToStorage()
        console.log('sukses menghapus data books, id : ', id)
        return
    }

    console.error('gagal menghapus data books, id : ', id)
}

function updateReadStatus(id) {
    const booksIndex = books.findIndex(((books) => {
        return books.id === id
    }))

    if (booksIndex !== -1) {
        books[booksIndex].isComplete = !books[booksIndex].isComplete
        saveBooksToStorage()
        console.log('sukses ubah data books, id : ', id)
        return
    }

    console.error('gagal ubah data books, id : ', id)
}

function updateBookData(book) {
    const booksIndex = books.findIndex(((books) => {
        return books.id === book.id
    }))

    if (booksIndex !== -1) {
        books[booksIndex] = book
        saveBooksToStorage()
        console.log('sukses ubah data books, id : ', book.id)
        return
    }
    console.error('gagal ubah data books, id : ', book.id)
}

function loadBookDataById(id) {
    const booksIndex = books.findIndex(((books) => {
        return books.id === id
    }))

    if (booksIndex !== -1) {
        bookId = id
        return books[booksIndex]
    }

    console.error('data buku tidak ditemukan, id : ', id)
}

function loadBooksFromStorage() {
    const data = localStorage.getItem(BOOKS_STORAGE_KEYS)
    let booksData= JSON.parse(data)

    if (booksData !== null) {
        books = booksData
    }
    
    showBooksList(books)
}

function filteredBooks(keyword) {
    const filteredBooksData =  books.filter(((books) => {
        return books.title.toLowerCase().includes(keyword.toLowerCase())
    }))

    showBooksList(filteredBooksData)
}