document.addEventListener('DOMContentLoaded', function() {
    const bookSubmit = document.getElementById('inputBook')
    const searchSubmit = document.getElementById('searchBook')

    bookSubmit.addEventListener('submit', function(event) {
        event.preventDefault()
        addBooksList()
        bookSubmit.reset()
    })

    searchSubmit.addEventListener('submit', function(event) {
        event.preventDefault()
        searchBook()
    })

    if (isStorageExist()) {
        loadBooksFromStorage()
    }
})

document.addEventListener('onbookchanged', function() {
    console.log('book data berhasil dirubah.')
    showBooksList(books)
})