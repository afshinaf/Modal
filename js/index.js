const createModal = (config) => {

    const hideModal = () => {
        modal.remove()
        document.removeEventListener('keyup', hideModalByEscape)
    }

    const hideModalByEscape = (e) => {
        if(e.key === 'Escape') {
            hideModal()
        }
    }
    const modal = document.createElement('div')
    modal.classList.add('modal')

    const container = document.createElement('div')
    container.classList.add('modal-container')

    const header = document.createElement('div')
    header.classList.add('header')
    header.innerHTML = config.title
    container.appendChild(header)

    const closeButton = document.createElement('button')
    closeButton.innerHTML = '&times'
    closeButton.onclick = hideModal
    header.appendChild(closeButton)

    const background = document.createElement('div')
    background.classList.add('background')
    modal.appendChild(background)
    background.onclick = hideModal

    const body = document.createElement('div')
    body.classList.add('body')
    body.innerHTML = config.body
    container.appendChild(body)

    modal.appendChild(container)
    document.body.appendChild(modal)

    document.addEventListener('keyup', hideModalByEscape)
}

document.querySelector('#modal-1').onclick = () => {
    createModal({
        title: 'welcome user!',
        body: 'this is body of modal'
    })
}

document.querySelector('#modal-2').onclick = () => {
    createModal({
        title: document.querySelector('#modal-title').innerHTML,
        body: document.querySelector('#modal-message').innerHTML
    })
}

