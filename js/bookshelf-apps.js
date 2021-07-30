function showBooksList(booksData) {
    const inCompleteElem = document.querySelector("#incompleteBookshelfList")
    const completeElem = document.querySelector("#completeBookshelfList")
    inCompleteElem.innerHTML = ""
    completeElem.innerHTML = ""
    for (const book of booksData) {
        createBooksElement(book)
    }
    bookId = 0
}

function addBooksList() {
    const title = document.querySelector("#inputBookTitle")
    const author = document.querySelector("#inputBookAuthor")
    const year = document.querySelector("#inputBookYear")
    const isComplete = document.querySelector("#inputBookIsComplete")
    const book = {
            id: (bookId === 0) ? +new Date : bookId,
            title: title.value,
            author: author.value,
            year: year.value,
            isComplete: isComplete.checked
        }
    if (bookId === 0) {
        addBookData(book)
    } else {
        updateBookData(book)
    }
}

function removeBookFromList(event) {
    const selectedId = Number(event.target.id)

    let confirmDelete = confirm('yakin ingin menghapus buku ini (id: '+selectedId+') ? ')
    
    if (confirmDelete) {
        deleteBooksById(selectedId)
    }
}

function updateStatus(event) {
    const selectedId = Number(event.target.id)
    updateReadStatus(selectedId)
}

function editBook(event) {
    const selectedId = Number(event.target.id)
    const book = loadBookDataById(selectedId)
    const title = document.querySelector("#inputBookTitle")
    const author = document.querySelector("#inputBookAuthor")
    const year = document.querySelector("#inputBookYear")
    const isComplete = document.querySelector("#inputBookIsComplete")

    title.value = book.title
    author.value = book.author
    year.value = Number(book.year)
    isComplete.checked = book.isComplete

    title.focus()
}

function searchBook() {
    const keyword = document.querySelector("#searchBookTitle");
    filteredBooks(keyword.value)
}

function createBooksElement(book) {
    const articleElem = document.createElement('article')
    const titleElem = document.createElement('h3')
    const authorElem = document.createElement('p')
    const yearElem = document.createElement('p')

    articleElem.classList.add('book_item')
    titleElem.innerText = book.title
    authorElem.innerText = 'Penulis: ' + book.author
    yearElem.innerText = 'Tahun: ' + book.year

    const divElem = document.createElement('div')
    const actionBtn = document.createElement('button')
    const deleteBtn = document.createElement('button')
    const editBtn = document.createElement('button')

    divElem.classList.add('action')
    
    actionBtn.id = book.id
    actionBtn.innerText = book.isComplete? 'Belum Selesai Dibaca' : 'Selesai Dibaca'
    actionBtn.classList.add('green')
    actionBtn.addEventListener('click', updateStatus)

    editBtn.id = book.id
    editBtn.innerText = 'Edit Buku'
    editBtn.classList.add('yellow')
    editBtn.addEventListener('click', editBook)

    deleteBtn.id = book.id
    deleteBtn.innerText = 'Hapus Buku'
    deleteBtn.classList.add('red')
    deleteBtn.addEventListener('click', removeBookFromList)

    divElem.append(actionBtn, editBtn, deleteBtn)
    articleElem.append(titleElem, authorElem, yearElem, divElem)

    let elem = book.isComplete ? document.querySelector('#completeBookshelfList') : document.querySelector('#incompleteBookshelfList')
    elem.append(articleElem)
}