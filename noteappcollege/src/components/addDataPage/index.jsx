import { Button, Form, Input, Select } from "antd"
import React, { useState } from "react"
import "./style.scss"
import {
  collection,
  getDocs,
  onSnapshot,
  doc,
  query,
  updateDoc,
  deleteDoc,
  addDoc,
} from "firebase/firestore"
import { db } from "../../store/firebase"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useAuth } from "../../store/context/login"
const AddDataPage = () => {
  let navigate = useNavigate()
  const { Option } = Select
  const [data, setdata] = useState({
    title: "",
    url: "",
    semester: "",
    branch: "",
    type: "",
  })

  const { user } = useAuth()
  const handleSemester = (value) => {
    console.log(`selected ${value}`)
  }

  const uploadData = async () => {
    if (data.title !== "" && data.url !== "") {
      const res = await addDoc(collection(db, "DATA TEST"), data)
      alert("Data Added")

      setdata({ ...data, title: "", url: "" })
    } else {
      alert("Data Is Not Added Please Check Blank Field")
    }
  }

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      navigate("/login", { replace: true })
    }
  }, [user])

  return (
    <div className="about_page_container">
      <div className="header">ADD DATA</div>
      <div className="body">
        <div className="form_group">
          <div className="label">Paper Name</div>
          <Input
            placeholder=""
            value={data.title}
            onChange={(e) => setdata({ ...data, title: e.target.value })}
          />
        </div>
        <div className="form_group">
          <div className="label">Paper URL/LINK</div>
          <Input
            placeholder=""
            value={data.url}
            onChange={(e) => setdata({ ...data, url: e.target.value })}
          />
        </div>
        <div className="form_group">
          <div className="label">Semester</div>
          <Select
            defaultValue="0"
            style={{
              width: 200,
            }}
            onChange={(value) => setdata({ ...data, semester: value })}
          >
            <Option value="0">Select Semester</Option>
            <Option value="1">Semester 1</Option>
            <Option value="2">Semester 2</Option>
            <Option value="3">Semester 3</Option>
          </Select>
        </div>
        <div className="form_group">
          <div className="label">Branch</div>
          <Select
            defaultValue="C"
            style={{
              width: 200,
            }}
            onChange={(value) => setdata({ ...data, branch: value })}
          >
            <Option value="C">Select Branch</Option>
            <Option value="cse">CSE</Option>
          </Select>
        </div>
        <div className="form_group">
          <div className="label">Paper Type</div>
          <Select
            defaultValue="c"
            style={{
              width: 200,
            }}
            onChange={(value) => setdata({ ...data, type: value })}
          >
            <Option value="c">Select Type</Option>
            <Option value="CT">CT PAPER</Option>
            <Option value="PREV">PREVIOUS YEAR PAPER</Option>
          </Select>
        </div>
        <div className="form_group">
          <Button type="primary" size={"large"} onClick={uploadData}>
            UPLOAD DATA
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AddDataPage
