import React from "react"
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav/"
import EmployeeTable from "./components/EmployeeTable/"
import SearchForm from "./components/SearchForm/"

function App() {
  return (
    <div className="App">
  <Nav />
  <EmployeeTable />
  <SearchForm />
    </div>
  );
}

export default App;
