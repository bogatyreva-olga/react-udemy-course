import store from "./redux/store.js";
import {clearTimes, addCurrentTime} from "./redux/actionCreators.js";

const addTimeBtn = document.getElementById('addTime')
addTimeBtn.addEventListener('click', () =>
    store.dispatch(addCurrentTime()))

const timeList = document.getElementById('timesList')
const clearTimesBtn = document.getElementById('clearTimes')

clearTimesBtn.addEventListener('click', () =>
    store.dispatch(clearTimes()))


store.subscribe(() => {
    timeList.innerHTML = ''
    const times = store.getState()
  times.forEach((time) => {
     let li = document.createElement('li')
      li.innerHTML = time
      timeList.appendChild(li)
  })
})


// const unsubscride = store.subscribe(() => console.log(`Redux store just changed! ${store.getState()}`))
//
// store.dispatch({
//     type: 'ADD_CURRENT_TIME',
//     payload: '14:14'
// })
//
// unsubscride()
//
// store.dispatch({
//     type: 'ADD_CURRENT_TIME',
//     payload: '14:30'
// })
//
// store.dispatch({
//     type: 'CLEAR_ALL_TIMES',
// })
