import React from "react"
import "./Navbar.scss"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
const Navbar = () => {
  let navigate = useNavigate()
  const [user, setUser] = useState(false)
  const logOut = () => {
    setUser(false)
    localStorage.clear()
    navigate("/login", { replace: true })
  }
  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      setUser(true)
    }
  }, [])

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            SSGI NOTE APP
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Previous Papers
                </Link>
              </li>
              {user === true && (
                <li className="nav-item">
                  <Link className="nav-link" to="/adddata">
                    Add Papers
                  </Link>
                </li>
              )}
              {user === true && (
                <li className="nav-item">
                  <div className="nav-link" onClick={logOut}>
                    Sign Out
                  </div>
                </li>
              )}
              {user === false && (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Sign In
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
