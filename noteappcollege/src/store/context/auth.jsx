import React, { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { AuthContext } from "./login"

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false)

  const [token, setToken] = useState(null)

  useEffect(() => {
    // setInterceptor();
    async function loadUserFromCookies() {
      const token = window.localStorage.getItem("token") || ""
      if (token !== "" || token !== null) {
        setUser(true)
        console.log("in this")
      } else {
        setUser(false)
        console.log("in that")
      }
    }
    loadUserFromCookies()
  }, [])

  return (
    <div>
      <AuthContext.Provider
        value={{
          user,
          token,
          setUser,
        }}
      >
        {window ? children : ""}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
