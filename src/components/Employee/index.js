import React from "react"
import axios from "axios"

const Employee = () => {
  return(
    <ul style={{color: "white", width:"100%", margin: "0px auto", display: "flex", justifyContent: "space-around"}}>
    <li>
      First Name
    </li>
    <li>
      Last Name
    </li>
      <li>
        Title
      </li>
  </ul>
  )
}

export default Employee;