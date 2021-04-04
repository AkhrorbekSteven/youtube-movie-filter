let iframeInput = document.querySelector('#iframeInput'),
    titleInput  = document.querySelector('#titleInput'),
    selectInput = document.querySelector('.add-select'),
    addBtn      = document.querySelector('#addBtn')

addBtn.addEventListener('click', (event) => {
    event.preventDefault()
    let newData = {
        url: iframeInput.value,
        title: titleInput.value,
        genre: selectInput.value
    }
    database.push(newData)
    window.localStorage.setItem('database', JSON.stringify(database))
    iframeInput.value = ''
    titleInput.value = ''
    selectInput.value = 'sci-fi'
})