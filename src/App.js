import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Task from './pages/Task'
import NotFound from './pages/NotFound'
function App() {
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
