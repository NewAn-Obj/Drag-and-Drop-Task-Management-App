import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Task from './pages/Task'
import NotFound from './pages/NotFound'
import { get_ItemList } from './store/action'
import { useDispatch } from 'react-redux'
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const getTasks = async () => {
      await dispatch(get_ItemList())
    }
    getTasks()
  }, [dispatch])
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Link to="/task">任务</Link> */}
        <Routes>
          <Route exact path="/" element={<Login />}>
            登录
          </Route>
          <Route path="/task" element={<Task />}>
            首页
          </Route>
          {/* <Route element={<NotFound />}>首页</Route> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
