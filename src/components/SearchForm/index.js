import React from "react"

const SearchForm = (props) => {
  return (
    <form> 
      <label>Search Employee Directory</label>
      <input type="text" name="search" onChange={props.handleInputChange}></input>
      <button type="submit">Search</button>
      <div>
      <button type="submit">Sort by First Name</button>
      <button type="submit">Sory by Title</button>
      </div>
    </form>
  )
}

export default SearchForm