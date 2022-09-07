import React, { useState } from 'react'
import ListItem from '../../../components/TaskItem'
import { useDispatch } from 'react-redux'
import { add_emptyTodo, change_dragItem } from '../../../store/action'
import classNames from 'classnames'
export default function TaskList({ style, name, taskList, type, MovingItem }) {
  const [flag, setFlag] = useState(true)
  const [moveIn, setMoveIn] = useState('')
  // console.log(taskList, type)
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
  const onDragOver = (e) => {
    e.preventDefault()
    console.log('经过了' + name)
  }
  const onDragEnter = (e) => {
    e.preventDefault()
    console.log('进入了' + name)
    setMoveIn(name)
  }
  const onDragLeave = (e) => {
    e.preventDefault()
    console.log('离开了' + name)
    setMoveIn('')
  }
  const onDrop = (e) => {
    e.preventDefault()
    console.log('放在了' + name)
    const payload = {
      ...MovingItem,
      MovingIn: type,
    }
    dispatch(change_dragItem(payload))
    // console.log('movein', moveIn)
    setMoveIn('')
  }
  return (
    <div
      className="tasklist"
      style={style}
      onDragEnter={(e) => onDragEnter(e)}
      onDragOver={(e) => onDragOver(e)}
      onDragLeave={(e) => onDragLeave(e)}
      onDrop={(e) => onDrop(e)}
    >
      <div className="list-title">{name}</div>
      <div
        className={classNames(
          'list-body',
          moveIn === name ? 'active' : ''
          // 'list-body-active'
        )}
      >
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
