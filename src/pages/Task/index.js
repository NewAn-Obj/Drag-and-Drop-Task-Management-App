import React from 'react'
import { useSelector } from 'react-redux'
import TaskList from './TaskList'
import './index.scss'
export default function Task() {
  const colorList = ['#eedcdc', '#9cd28e', '#dddddd']
  const state = useSelector((state) => state)
  const { STATUS_CODE, TASKS, MovingItem } = state
  return (
    <div className="task">
      {Object.keys(STATUS_CODE).map((item, i) => {
        return (
          <TaskList
            key={i}
            style={{ backgroundColor: colorList[i] }}
            type={item}
            name={STATUS_CODE[item]}
            taskList={TASKS}
            MovingItem={MovingItem}
          ></TaskList>
        )
      })}
    </div>
  )
}
