const initValue = {
  STATUS_CODE: {
    STATUS_TODO: 'Prepare to study',
    STATUS_DOING: 'Learning...',
    STATUS_DONE: 'Complete',
  },
  TASKS: [],
}

export default function reducer(state = initValue, action) {
  const { type, payload } = action
  switch (type) {
    case 'GET_ITEMLIST':
      return {
        ...state,
        TASKS: [...payload],
      }
    case 'ADD_EMPTYTODO':
      return {
        ...state,
        TASKS: [
          ...state.TASKS,
          {
            id: payload,
            status: 'STATUS_TODO',
            title: '',
          },
        ],
      }
    case 'ADD_TODO':
      return {
        ...state,
        TASKS: state.TASKS.map((item) => {
          if (item.id === payload.id) {
            return {
              id: payload.id,
              status: 'STATUS_TODO',
              title: payload.title,
            }
          }
          return item
        }),
      }
    case 'DELETE_TODO':
      return {
        ...state,
        TASKS: state.TASKS.filter((item) => {
          return item.id !== payload
        }),
      }
    case 'SAVE_DRAGITEM':
      return {
        ...state,
        MovingItem: {
          ...state.MovingItem,
          MovingId: payload,
        },
      }
    case 'CHANGE_DRAGITEM':
      return {
        ...state,
        MovingItem: { ...payload },
        TASKS: state.TASKS.map((item) => {
          if (item.id === payload.MovingId) {
            return {
              id: payload.MovingId,
              status: payload.MovingIn,
              title: item.title,
            }
          }
          return item
        }),
      }

    default:
      return state
  }
}
