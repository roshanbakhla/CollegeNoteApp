import React, { useState, useEffect } from "react"
import Branch from "./components/branch/Branch"
import {
  collection,
  getDocs,
  onSnapshot,
  doc,
  query,
  updateDoc,
  deleteDoc,
} from "firebase/firestore"
import { db } from "./store/firebase"
import Navbar from "./components/Navbar/Navbar"
import PaperPage from "./components/PaperPage"
import AddDataPage from "./components/addDataPage"
import LoginPage from "./components/login"
import AuthProvider from "./store/context/auth"
import Home from "./components/Home/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./app.scss"
function App() {
  const testCollection = collection(db, "test")
  const [data, setData] = useState([{}])

  useEffect(() => {
    const q = query(collection(db, "DATA TEST"))
    let temp = []
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log("doc.data()", doc.data())

        temp.push(doc.data())
      })
      setData(temp)
      temp = []
    })

    return () => unsubscribe()
  }, [])

  return (
    <div className="app">
      <Navbar />

      <div className="main_container">
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resource" element={<PaperPage data={data} />} />
            <Route path="/adddata" element={<AddDataPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </AuthProvider>
      </div>
    </div>
  )
}

export default App
