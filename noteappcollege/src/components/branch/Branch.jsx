import React from "react"
import "./style.scss"
import BranchCard from "../cardBranch/BranchCard"
const Branch = () => {
  const branchArray = [
    { name: "IT", img: "assets/IT.png"},
    { name: "CSE", img: "assets/CSE.png"},
    { name: "EE", img: "assets/EE.png"},
    { name: "CIVIL", img: "assets/CIVIL.png" },
    { name: "MECHANICAL", img: "assets/MECH.png" },
    { name: "EEE", img: "assets/EEE.png" },
  ]
  return (
    <div className="branch_page">
      <div className="card_container">
        <div className="card_container_header">Select Your Branch</div>
        <div className="card_container_body">
          {
            branchArray.map((val,ind)=> <BranchCard branchname={val.name} branchimg={val.img} />)
          }
        </div>
      </div>
    </div>
  )
}

export default Branch
