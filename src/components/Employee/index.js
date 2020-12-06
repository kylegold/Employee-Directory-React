import React, { useState } from "react"
import axios from "axios"


const Employee = (props) => {
  // console.log(props.users)
  // const [users, setUsers] = useState([]);
  // console.log(props.users.users)
  const style={color: "white", width:"100%", margin: "0px auto", display: "flex", justifyContent: "space-around"}
  const users = props.users
  console.log(users)
  return(
  // <div>{console.log(users)}</div>
    // <p>test</p>
   <div> {users.map(user => <ul style={style}><li>{user.name.title}</li> <li>{user.name.first}</li> <li>{user.name.last}</li></ul>)}</div>
  )
}

export default Employee;