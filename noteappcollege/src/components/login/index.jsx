import React from "react"
import { useState } from "react"
import { Button, Form, Input, Select } from "antd"
import { auth } from "../../store/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import "./style.scss"
import { useEffect } from "react"
import { useAuth } from "../../store/context/login"
const LoginPage = () => {
  let navigate = useNavigate()
  const { user, setUser } = useAuth()
  const [data, setdata] = useState({
    email: "",
    password: "",
  })
  const loginUser = async () => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        console.log("user", user)
        localStorage.setItem("token", user.accessToken)
        setUser(true)
        navigate("/", { replace: true })
      })
      .catch((error) => {
        alert("Please Enter Valid Email And Password")
        console.log("error", error)
        const errorCode = error.code
        const errorMessage = error.message
      })
  }

  useEffect(() => {
    console.log("user", user)
    if (localStorage.getItem("token") !== null) {
      navigate("/", { replace: true })
    }
  }, [user])

  return (
    <div className="login_page_container">
      <div className="header">Login</div>
      <div className="body">
        <div className="form_group">
          <div className="label">Paper Name</div>
          <Input
            placeholder=""
            value={data.title}
            type="email"
            onChange={(e) => setdata({ ...data, email: e.target.value })}
          />
        </div>
        <div className="form_group">
          <div className="label">Paper URL/LINK</div>
          <Input
            placeholder=""
            value={data.url}
            type="password"
            onChange={(e) => setdata({ ...data, password: e.target.value })}
          />
        </div>

        <div className="form_group">
          <Button type="primary" size={"large"} onClick={loginUser}>
            Login
          </Button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
