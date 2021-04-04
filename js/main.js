let cards       = document.querySelector('.cards'),
    submitOrder = document.querySelector('#submitOrder'),
    select      = document.querySelector('#selectPanel'),
    cardSelect  = document.querySelector('.cardSelect')

const renderer = (data) => {
    // cards.innerHTML = null
    for (let element of data) {
        let card = document.createElement('div')
        let iframe = document.createElement('div')
        let contentWrapper = document.createElement('div')
        let title = document.createElement('h2')
        let content = document.createElement('p')
        
        card.classList.add('card')
        contentWrapper.classList.add('bottom-wrapper')
        title.classList.add('heading')
        content.classList.add('type')
        
        iframe.innerHTML = element.url
        title.innerText = element.title
        content.innerText = element.genre
        
        contentWrapper.appendChild(title)
        contentWrapper.appendChild(content)
        card.appendChild(iframe)
        card.appendChild(contentWrapper)
        cards.appendChild(card)
    }
}

renderer(database)


submitOrder.addEventListener('click', (event) => { 
    event.preventDefault()
    cards.innerHTML = null
    if (select.value === 'all') {
        renderer(database)
    } else {
        for (let element of database) {
            if (element.genre === select.value) {
                let card = document.createElement('div')
                let iframe = document.createElement('div')
                let contentWrapper = document.createElement('div')
                let title = document.createElement('h2')
                let content = document.createElement('p')
                
                card.classList.add('card')
                contentWrapper.classList.add('bottom-wrapper')
                title.classList.add('heading')
                content.classList.add('type')
                
                iframe.innerHTML = element.url
                title.innerText = element.title
                content.innerText = element.genre
                
                contentWrapper.appendChild(title)
                contentWrapper.appendChild(content)
                card.appendChild(iframe)
                card.appendChild(contentWrapper)
                cards.appendChild(card)
            }
        }
    }
})
