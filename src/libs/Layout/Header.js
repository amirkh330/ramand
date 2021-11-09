import { Avatar } from 'antd';
import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import {list} from "../../Asset/list"

function HeaderApp(props) {


  const username = useSelector(st => st.username)
  
  return (
    <div className={"header  "}>
      <div className={"amount"}>
        <span className={"h-5"}>Total: {list.length} </span>
          
        </div>
      <div className={'account'}>
        <span className="mx-1">{username}</span>
        <Avatar icon={<UserOutlined />} size={"large"}/>
        </div>
        
    </div>
  );
}

export default HeaderApp;