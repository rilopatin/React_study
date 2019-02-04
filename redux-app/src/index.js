import {createStore} from 'redux'

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'SUM' :
            return state + 1
        case 'SUB' :
            return state -1
        case 'RESET' :
            return state = 0
        default:
            return state
    }
}

const inc = () => ({type: 'SUM'})
const dec = () => ({type: 'SUB'})
const reset = () => ({type: 'RESET'})

const store = createStore(reducer)

document.getElementById('sum').addEventListener('click', () => {
    store.dispatch(inc())
})
document.getElementById('sub').addEventListener('click', () => {
    store.dispatch(dec())
})
document.getElementById('reset').addEventListener('click', () => {
    //const value = Math.floor(Math.random() * 10)
    store.dispatch(reset())
})

const update = () => {
    document.getElementById('counter').textContent = store.getState()
}

store.subscribe(update)





