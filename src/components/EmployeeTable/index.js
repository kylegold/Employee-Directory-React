import React from "react"
import axios from "axios"
import Employee from "../Employee"

const EmployeeTable = () => {
  return (
    <div>
      <h2>Employee Table: </h2> 
    <ul  style={{ width: 800, margin: "0 auto"}}>
      <li style={{ width: "100%", margin: "0 auto"}}>
     <Employee />
      </li>
    </ul>
    </div>
  )
}

export default EmployeeTable