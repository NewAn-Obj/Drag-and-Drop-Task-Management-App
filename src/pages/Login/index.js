import React from 'react'
import './index.scss'
import { useNavigate } from 'react-router-dom'
export default function Login() {
  const navigate = useNavigate()
  const login = () => {
    navigate('./task')
  }
  return (
    <div className="login" onClick={login}>
      start App
    </div>
  )
}
