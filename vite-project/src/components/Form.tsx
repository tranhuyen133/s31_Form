import React, { useState } from 'react'

export default function Form() {
    const [name,setName]=useState<string>("");
    const [email,setEmail]=useState<string>("");
    const handleClick=()=>{
        console.log("đã gọi và hàm");
        
    }
    
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        // console.log("đã ăn vào hàm handleChange");
        console.log("giá trị người dùng đã nhập vào",e.target.value);
        //cập nhật SetName
        setName(e.target.value);
    const changeEmail=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setEmail(event.target.value);
        
    }
}
  return (
    <div>
      {
        /*
        Các kĩ thuật xử lí trong form
        có 2 kĩ thuật xử lí chính
        1.controller
            + lấy dữ lieu người dùng nhập vào ô Input
            +lấy dữ liệu khi người dùng nhập vào ô TextArea
            +chọn Select-Option
                -ở trong function component món quản lí dữ liệu (trạng thái) dùn UseState
        2.uncontroller
        */
      }
      <div>
        <label htmlFor="">Tên</label>
        <input
          onChange={handleChange}  
            type="text" 
            />
            <p>Tên người dùng nhập :{name}</p>
            <label htmlFor="">Email</label>
            <input 
          onChange={changeEmail}
            type="text" />
            <p>Email người dùng nhập :{email}</p>
            <button onClick={handleClick}>Login</button></div>
      </div>
  )
}

