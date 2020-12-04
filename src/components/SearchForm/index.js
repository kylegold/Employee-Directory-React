import React from "react"

const SearchForm = (props) => {
  return (
    <form> 
      <label>Search Employee Directory</label>
      <input type="text" onChange={props.handleInputChange}></input>
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchForm