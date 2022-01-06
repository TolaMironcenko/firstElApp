const screens = document.querySelectorAll('.screen')
const timeEl = document.querySelector('#place')
const placeList = document.querySelector('#place-list')
const groupList = document.querySelector('#group-list')
let place = ''
let group = ''

placeList.addEventListener('click', (event) => {
    if (event.target.classList.contains('place')){
        if (event.target.getAttribute('data-place') === 'spk') {
            screens[1].classList.add('center')
            place = event.target.getAttribute('#place')
            screens[0].classList.add('up')
        }else {
            place = event.target.getAttribute('#place')
            screens[0].classList.add('up')
        }
    }
})

groupList.addEventListener('click', (event) => {
    if (event.target.classList.contains('group')){      
        group = event.target.getAttribute('#group')
        screens[1].classList.add('up')
    }
})

