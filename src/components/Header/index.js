import React from 'react'
import './index.scss'
import { IconFont } from '../iconFont';

const Header = ()=>{
  return(
    <div className="header">
      <div className="header-left">
        <img src="./assets/sousuo.png" alt="logo" />
        <div className="header-input">
          <span><img src="./sousuo.png"/></span>
          <input placeholder="搜索"></input>
        </div>
      </div>
      <div className="header-right"></div>
    </div>
  )
}

export default Header;