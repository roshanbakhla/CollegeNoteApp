import React from "react"
import { Link } from "react-router-dom"
import "./style.scss"
const HomeHeader = () => {
  return (
    <div className="home_header_main">
      <div className="container">
        <div class="row">
          <div className="col-lg-6 col-md-6">
            <div className="context">
              <div className="main_heading">One Destination for</div>
              <div className="sub_heading">Complete Exam Preparation</div>
              <Link to="/resource" className="btn btn_home_header">
              Explore <i className="fa-solid fa-magnifying-glass"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <img src="/assets/notes.svg" alt="" className="img-fluid" />
          </div>
        </div>
        <div className="site_info">
          WE MAKE THINGS EASY
        </div>
      </div>
    </div>
  )
}

export default HomeHeader
