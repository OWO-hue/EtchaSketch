const container = document.querySelector('#container')

const black = document.querySelector('#black')
const rainbow = document.querySelector('#rainbow')

const gridNum = 0



let result = 'black'

let reset = document.querySelector('#reset')

let resetBool = false
reset.addEventListener('click', () => {
    let grids = document.querySelectorAll('#grid')

    for (let allgrid of grids) {
        allgrid.style.background = null
    }
    console.log('is it working')
})




rainbow.addEventListener('click',() => {
    result = 'rainbow'
})

black.addEventListener('click',() => {
    result = 'black'
})

const grid = document.createElement('div')
grid.setAttribute('id','grid')
const hover = (e) => {
    
    if (result === 'black') {
        const color = 'black'
        e.target.style.background = color
    }

    if (result === 'rainbow') {
        const color = ['red','blue','green','purple','orange','yellow','navy']
        e.target.style.background = color[Math.floor(Math.random()*7)]
    }
}
const mouseOut = (e) => {
    e.target.style.background = 'white'
}

const idGrid = document.querySelector('#grid')

const gridContainer = document.createElement('div')
gridContainer.setAttribute('id','gridContainer')




for (let j = 0 ; j < 16; j++) {
    const tempContainer = document.createElement('div')
    for (let i = 0; i < 16; i++) {
        const temp = document.createElement('div')
        temp.setAttribute('id','grid')
        temp.addEventListener('mouseover',hover)
        // temp.addEventListener('mouseout',mouseOut)
        tempContainer.appendChild(temp)
    }
    tempContainer.setAttribute('id','gridContainer')
    container.appendChild(tempContainer)
}
const gridButton = document.querySelector('#gridButton')

const moreGrid = () => {
    let askUserNum = prompt('hi put in a number for the amount of grids (up to 100): ')
    while (askUserNum > 100) {
        askUserNum = prompt('number is too high or you did not put in a Number! Try again')
    }
    container.innerHTML = null
    for (let j = 0 ; j < askUserNum; j++) {
        const tempContainer = document.createElement('div')
        for (let i = 0; i < askUserNum; i++) {
            const temp = document.createElement('div')
            temp.setAttribute('id','grid')
            temp.addEventListener('mouseover',hover)
            // temp.addEventListener('mouseout',mouseOut)
            tempContainer.appendChild(temp)
        }
        tempContainer.setAttribute('id','gridContainer')
        container.appendChild(tempContainer)
    }
}

gridButton.addEventListener('click',moreGrid)



