import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
export default function NotFound() {
  const navigate = useNavigate()
  const [time, setTime] = useState(3)
  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1)
    }, 1000)
    if (time === 0) {
      //   navigate('/')
      navigate('/', { replace: true })
    }
  }, [time, navigate])
  return (
    <div>
      <h1>404 Not Found,您访问的页面不存在</h1>
      <div>
        {time}s后跳转到
        <Link replace to="/">
          {' '}
          开始页
        </Link>
      </div>
    </div>
  )
}
