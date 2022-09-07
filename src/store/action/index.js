export const add_emptyTodo = (id) => {
  return {
    type: 'ADD_EMPTYTODO',
    payload: id,
  }
}
export const add_todo = (payload) => {
  return {
    type: 'ADD_TODO',
    payload,
  }
}
export const delete_todo = (id) => {
  return {
    type: 'DELETE_TODO',
    payload: id,
  }
}
