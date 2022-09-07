import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { add_todo, delete_todo, save_dragItem } from '../../store/action'
import classNames from 'classnames'
export default function ListItem({ id, name, setFlag }) {
  const [showDelete, setShowDelete] = useState(false)
  const [value, setValue] = useState('')
  const handleChange = (e) => {
    // console.log(e.target.value)
    setValue(e.target.value)
  }
  const inputRef = useRef()
  const dispatch = useDispatch()
  const onKeyDown = (e) => {
    // console.log(e.key)
    if (e.key === 'Enter') {
      // console.log('添加')
      // console.log(value, id)
      if (value.trim() === '') {
        alert('todo不能为空')
        setValue('')
        return
      }
      const payload = {
        id,
        title: value,
      }
      dispatch(add_todo(payload))
      setFlag(true)
    }
  }
  const onBlur = () => {
    // console.log(e)
    if (value.trim() === '') {
      setValue('')
      inputRef.current.focus()
      return
    }
    const payload = {
      id,
      title: value,
    }
    dispatch(add_todo(payload))
    setFlag(true)
  }
  const deleteTodo = () => {
    // console.log(id)
    dispatch(delete_todo(id))
  }
  const onDragStart = (e) => {
    // console.log(e)
    // console.log(id)
    setShowDelete(false)
    dispatch(save_dragItem(id))
  }

  return (
    <div>
      {name === '' && (
        <div className="list-item">
          <input
            type="text"
            value={value}
            onChange={(e) => handleChange(e)}
            onKeyDown={(e) => onKeyDown(e)}
            autoFocus
            onBlur={onBlur}
            ref={inputRef}
          />
        </div>
      )}
      {name !== '' && (
        <div
          className="list-item"
          onMouseEnter={() => setShowDelete(true)}
          onMouseLeave={() => setShowDelete(false)}
          draggable="true"
          onDragStart={(e) => onDragStart(e)}
        >
          {name}
          <div
            // className="deleteIcon iconfont icon-delete"
            className={classNames(
              'iconfont',
              'icon-delete',
              showDelete ? 'deleteIcon-show ' : 'deleteIcon-hide'
            )}
            onClick={deleteTodo}
          ></div>
        </div>
      )}
    </div>
  )
}
