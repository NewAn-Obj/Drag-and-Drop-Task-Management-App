import React, { useState } from 'react'
import ListItem from '../../../components/TaskItem'
import { useDispatch } from 'react-redux'
import { add_emptyTodo } from '../../../store/action'
export default function TaskList({ style, name, taskList, type }) {
  const [flag, setFlag] = useState(true)
  const renderList = taskList.filter((item) => item.status === type)
  const dispatch = useDispatch()
  const addTodo = () => {
    if (!flag) {
      alert('todo不能为空')
      return
    }
    const id = Date.now()
    dispatch(add_emptyTodo(id))
    setFlag(false)
  }
  // console.log(flag)
  return (
    <div className="tasklist" style={style}>
      <div className="list-title">{name}</div>
      <div className="list-body">
        {renderList.map((item) => {
          return (
            <ListItem
              name={item.title}
              key={item.id}
              id={item.id}
              setFlag={(isFlag) => setFlag(isFlag)}
            ></ListItem>
          )
        })}
        {type === 'STATUS_TODO' && (
          <div
            className="iconfont icon-roundadd add-icon"
            onClick={addTodo}
          ></div>
        )}
      </div>
    </div>
  )
}
