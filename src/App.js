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
  // let sorted = []

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


  const handleSortButton = (e) => {
    e.preventDefault()
    // const value = e.target.value
    const name = e.target.name
    
    switch(name) {
      case "first": 
      const sortedFirst = filtered.sort((a,b)=> {
        if (a.name.first < b.name.first) {
          return -1;
        }
        if (a.name.first > b.name.first) {
          return 1;
        }
      
        // names must be equal
        return 0; 
      })
     console.log("sorted filter first", sortedFirst)
      setFiltered(sortedFirst)
      break;
      case "last": 
      const sortedLast = filtered.sort((a,b)=> {
        if (a.name.last < b.name.last) {
          return -1;
        }
        if (a.name.last > b.name.last) {
          return 1;
        }
      
        // names must be equal
        return 0; 
      })
     console.log("sorted filter last", sortedLast)
      setFiltered(sortedLast)
         break;

         case "title":  
         const sortedTitle = filtered.sort((a,b)=> {
          if (a.name.title < b.name.title) {
            return -1;
          }
          if (a.name.title > b.name.title) {
            return 1;
          }
        
          // names must be equal
          return 0; 
        })
       console.log("sorted filter title", sortedTitle)
       setFiltered(sortedTitle)
         break;
        default: 
        return console.log("default")
        
      }
    }

  return (
    <div className="App">
  <Nav />
  <SearchForm handleInputChange={handleInputChange} handleSortButton={handleSortButton}/>
  <EmployeeTable users={filtered}/>
    </div>
  );
}

export default App;
