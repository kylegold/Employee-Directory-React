import React, { useState } from "react"
import axios from "axios"


const Employee = (props) => {
  // console.log(props.users)
  // const [users, setUsers] = useState([]);
  console.log(props.users.users)
  return(
  // <div>{console.log(props.users)}</div>
    // <p>test</p>
   <div> {props.users.users.map(user => <ul style={{color: "white", width:"100%", margin: "0px auto", display: "flex", justifyContent: "space-around"}}> <li>{user.name.title}</li><li>{user.name.first}</li><li>{user.name.last}</li></ul>)}</div>
  )
}

export default Employee;