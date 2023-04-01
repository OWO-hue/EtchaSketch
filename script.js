const container = document.querySelector('#container')

const black = document.querySelector('#black')
black.addEventListener('click', (e) => e.target.id)
const rainbow = document.querySelector('#rainbow')

const grid = document.createElement('div')
grid.setAttribute('id','grid')
const hover = (e) => {
    const color = ['red','blue','green','purple','orange','yellow','navy']
    e.target.style.background = color[Math.floor(Math.random()*7)]
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

