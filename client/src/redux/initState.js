const initState = () => {
  const state  = {
    items: [],
  }
  
  const fromLS = JSON.parse(window.localStorage.getItem('myApp'))
  return fromLS ? fromLS : state
  // const stateFromLocalStorage = window.localStorage.getItem('redux')
  // return stateFromLocalStorage ? JSON.parse(stateFromLocalStorage) : state
}




export default initState
