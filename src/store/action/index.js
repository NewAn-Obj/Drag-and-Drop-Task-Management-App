import axios from 'axios'
export const get_ItemList = () => {
  return async (dispatch) => {
    const { data: payload } = await axios.get('http://localhost:8000/TASKS')
    // console.log(payload)
    dispatch({
      type: 'GET_ITEMLIST',
      payload,
    })
  }
}
export const add_emptyTodo = (id) => {
  return async (dispatch) => {
    await axios.post('http://localhost:8000/TASKS', {
      id,
      status: 'STATUS_TODO',
      title: '',
    })
    // console.log(payload)
    dispatch({
      type: 'ADD_EMPTYTODO',
      payload: id,
    })
    get_ItemList()
  }
}
export const add_todo = (payload) => {
  return async (dispatch) => {
    await axios.patch(`http://localhost:8000/TASKS/${payload.id}`, {
      title: payload.title,
    })
    // console.log(res)
    dispatch({
      type: 'ADD_TODO',
      payload,
    })
    get_ItemList()
  }
}
export const delete_todo = (id) => {
  return async (dispatch) => {
    await axios.delete(`http://localhost:8000/TASKS/${id}`)
    // console.log(res)
    dispatch({
      type: 'DELETE_TODO',
      payload: id,
    })
    get_ItemList()
  }
}
export const save_dragItem = (id) => {
  return {
    type: 'SAVE_DRAGITEM',
    payload: id,
  }
}
export const change_dragItem = (payload) => {
  return async (dispatch) => {
    await axios.patch(`http://localhost:8000/TASKS/${payload.MovingId}`, {
      status: payload.MovingIn,
    })
    // console.log(res)
    dispatch({
      type: 'CHANGE_DRAGITEM',
      payload,
    })
    get_ItemList()
  }
}
