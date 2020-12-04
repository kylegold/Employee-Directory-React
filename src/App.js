import React, {useState, useEffect} from "react"
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav/"
import EmployeeTable from "./components/EmployeeTable/"
import SearchForm from "./components/SearchForm/"
import axios from "axios"

function App() {
  const [search, setSearch] = useState("")

  const handleInputChange = (e) => {
   const value = e.target.value
   console.log(value)
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
