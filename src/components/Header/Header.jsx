import React from 'react'
import './Header.css'
import logo from "../../static/logo.png"

function Header() {
  return (
    <div className="navbar">
    <img src={logo} alt="logo" className="img-height-40px ml120px mt20px"/>
    <a href="#home" className="mr120px">코코런아트</a>
    <div className="subnav">
      <button className="subnavbtn">전시 소개 <i className="fa fa-caret-down"></i></button>
      <div className="subnav-content">
        <a href="#company">현재전시</a>
        <a href="#team">지난전시</a>
      </div>
    </div> 
    <div className="subnav">
      <button className="subnavbtn">문화시설 <i className="fa fa-caret-down"></i></button>
      <div className="subnav-content">
        <a href="#bring">교육프로그램</a>
        <a href="#deliver">연계프로그램</a>
        <a href="#package">주말프로그램</a>
      </div> 
    </div> 
    <div className="subnav">
      <button className="subnavbtn">편의시설 <i className="fa fa-caret-down"></i></button>
      <div className="subnav-content">
        <a href="#link1">미술관옆카페</a>
        <a href="#link2">세미나실</a>
        <a href="#link3">주말대관안내</a>
      </div>
    </div>
    <div className="subnav">
      <button className="subnavbtn">관람안내 <i className="fa fa-caret-down"></i></button>
      <div className="subnav-content">
        <a href="#link1">공지사항</a>
        <a href="#link2">이벤트</a>
        <a href="#link3">도슨트안내</a>
      </div>
    </div>
    <a href="#contact">찾아오시는 길</a>
  </div>
  )
}

export default Header
