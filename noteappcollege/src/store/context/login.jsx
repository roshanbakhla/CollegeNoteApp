import { createContext, useContext } from "react"

export const AuthContext = createContext({
  isAuthenticated: false,
  user: false,
  setUser: () => {},
  logout: () => {},
  sendOtpEmail: () => {},
  sendOtpPhone: () => {},
  loading: null,
  token: null,
  access: null,
})

export const useAuth = () => useContext(AuthContext)
