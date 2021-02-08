import React, {useState} from 'react'
import './Siderbar.scss'
import { Menu } from 'antd';
import {
  Link
} from "react-router-dom";

const Siderbar = () =>{
  const list = [
    {
      name: '发现音乐',
      path: '/home',
      activePath: ['/home']
    },
    {
      name: '视频',
      path: '/personal',
      activePath: ['/personal']
    },
    {
      name: '直播',
      path: '/video',
      activePath: ['/video']
    },
    {
      name: '朋友',
      path: '/friends',
      activePath: ['/friends']
    },
    {
      name: '私人FM',
      path: '/personalFM',
      activePath: ['/personalFM']
    },
    {
      name: '推荐',
      path: '/introduce',
      activePath: ['/introduce']
    },
    {
      name: '推荐',
      path: '/introduce',
      activePath: ['/introduce']
    },
    {
      name: '推荐',
      path: '/introduce',
      activePath: ['/introduce']
    },
    {
      name: '推荐',
      path: '/introduce',
      activePath: ['/introduce']
    },
    {
      name: '推荐',
      path: '/introduce',
      activePath: ['/introduce']
    },
    {
      name: '推荐',
      path: '/introduce',
      activePath: ['/introduce']
    },
    {
      name: '直播',
      path: '/video',
      activePath: ['/video']
    },
    {
      name: '朋友',
      path: '/friends',
      activePath: ['/friends']
    },
    {
      name: '私人FM',
      path: '/personalFM',
      activePath: ['/personalFM']
    },
  ]
  const listleft = list.map((item, index)=>{
    return(
      <li key={index}>
        <a href={item.path} className={item.activePath.includes(window.location.pathname) ? 'titlelist' : ''}>
          {item.name}</a>
      </li>
    )
  })

  return(
    <div className="siderbar">
      <ul>
        {listleft}
      </ul>
    </div>
  )
}

export default Siderbar;