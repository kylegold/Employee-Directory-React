import React from "react"

const SearchForm = (props) => {
  return (
    <form> 
      <label>Search Employee Directory</label>
      <input type="text" name="search" onChange={props.handleInputChange}></input>
      <button type="submit">Search</button>
      <div>
      <button type="submit" name="first" onClick={props.handleSortButton}>Sort by First Name</button>
      <button type="submit" name="last" onClick={props.handleSortButton}>Sort by Last Name</button>
      <button type="submit" name="title" onClick={props.handleSortButton}>Sory by Title</button>
      </div>
    </form>
  )
}

export default SearchForm