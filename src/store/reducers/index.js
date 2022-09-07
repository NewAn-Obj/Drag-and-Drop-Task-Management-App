const initValue = {
  STATUS_CODE: {
    STATUS_TODO: 'Prepare to study',
    STATUS_DOING: 'Learning...',
    STATUS_DONE: 'Complete',
  },
  TASKS: [
    {
      id: 0,
      status: 'STATUS_TODO',
      title: '学习HTML',
    },
    {
      id: 1,
      status: 'STATUS_TODO',
      title: '学习CSS',
    },
    {
      id: 2,
      status: 'STATUS_DOING',
      title: '学习JS',
    },
    {
      id: 3,
      status: 'STATUS_DOING',
      title: '学习AXIOS',
    },
    {
      id: 4,
      status: 'STATUS_DONE',
      title: '学习REDUX',
    },
  ],
}

export default function reducer(state = initValue, action) {
  const { type, payload } = action
  switch (type) {
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

    default:
      return state
  }
}
