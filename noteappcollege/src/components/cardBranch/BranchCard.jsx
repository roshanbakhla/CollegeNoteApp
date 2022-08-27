import React from 'react'
import "./style.scss"
const BranchCard = ({branchimg,branchname}) => {
  return (
    <div className='brach_card'>
        <div className="card_img_box">
            <img src={branchimg} alt="" />
        </div>
        <div className="branch_card_sname">
          {branchname}
        </div>
    </div>
  )
}

export default BranchCard