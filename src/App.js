import React, {useState, useEffect} from "react"
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav/"
import EmployeeTable from "./components/EmployeeTable/"
import SearchForm from "./components/SearchForm/"
import axios from "axios"

function App() {
  const [search, setSearch] = useState("")
  const [users, setUsers] = useState([])
  const [filtered, setFiltered] = useState([])

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=20").then((req) => {
      console.log(req.data.results)
       const users = req.data.results
      setUsers({...users, users})
    })
   
  })

  const handleInputChange = (e) => {
   const value = e.target.value
   const name = e.target.name
   setSearch({...search, value})
   console.log(value, name)
  }

  return (
    <div className="App">
  <Nav />
  <SearchForm handleInputChange={handleInputChange}/>
  <EmployeeTable/>
    </div>
  );
}

export default App;
