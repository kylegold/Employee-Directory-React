import React, {useState, useEffect} from "react"
// import logo from './logo.svg';
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
      // console.log(req.data.results)
       setUsers(req.data.results)
       setFiltered(req.data.results)
       console.log(users)
    })
   
  }, [])

  const handleInputChange = (e) => {
   const value = e.target.value
   const name = e.target.name
   setSearch(value);
   const filter = users.filter(user => {
    return (user.name.title + " " + user.name.first + " " + user.name.last).toLowerCase().search(
      value) !== -1;
  });
  setFiltered(filter)
   console.log(value, name)
  }

  return (
    <div className="App">
  <Nav />
  <SearchForm handleInputChange={handleInputChange}/>
  <EmployeeTable users={filtered}/>
    </div>
  );
}

export default App;
