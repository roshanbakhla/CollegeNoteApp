/* eslint-disable react/jsx-no-undef */
import React, { useState } from "react"
import "./style.scss"
import { Select, Button } from "antd"
import "antd/dist/antd.css"
import { FilePdfOutlined } from "@ant-design/icons"
import { useEffect } from "react"
const { Option } = Select
const PaperPage = ({ data }) => {
  const handleChange = (value) => {
    console.log(`selected ${value}`)
  }
  const [paperData, setPaperData] = useState([])

  const semFilter = (value, type) => {
    let newData = data
    if (type === "SEM") {
      newData = data.filter((val) => {
        return val.semester === value
      })
    }
    if (type === "PEP") {
      newData = data.filter((val) => {
        return val.type === value
      })
    }

    setPaperData(newData)
  }

  useEffect(() => {
    setPaperData(data)
  }, [data])

  return (
    <div className="paper_page_container">
      <div className="filter_section">
        <Select
          defaultValue="Select Semester"
          style={{
            width: 180,
          }}
          onChange={(value) => semFilter(value, "SEM")}
        >
          <Option value="1">Semster 1</Option>
          <Option value="2">Semster 2</Option>
          <Option value="3">Semster 3</Option>
        </Select>
        <Select
          defaultValue="Select Paper"
          style={{
            width: 180,
          }}
          onChange={(value) => semFilter(value, "PEP")}
        >
          <Option value="PREV">Previous Paper</Option>
          <Option value="CT">CT Paper</Option>
        </Select>
      </div>
      <div className="paper_page_container_body">
        {paperData.length > 0 &&
          paperData.map((val, ind) => {
            return (
              <div className="paper_data" key={ind}>
                <div className="left">
                  <div className="img">
                    <FilePdfOutlined className="icons_data" />
                  </div>

                  <div className="name">{val.title}</div>
                  <div className="sem">Semester {val.semester} </div>
                  <div className="branch">Branch {val.branch} </div>
                  <div className="type">{val.type} </div>
                </div>
                <div className="right">
                  <Button type="primary">
                    <a href={val.url} target="_blank">
                      Open
                    </a>
                  </Button>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default PaperPage
