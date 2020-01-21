import React, { useContext } from 'react'
import SearchContext from '../../utils/SearchContext'

const Search = () => {

  const { book, handleInputChange, handleInputForm } = useContext(SearchContext)

  return (
    <div className="container">
    <form>
      <div className="form-group">
        <label htmlFor="book">Search For A Book</label>
        <input className="form-control" type='text' name='book' id='book' value={book} onChange={handleInputChange} />
      </div>
      <div className="form-group">
        <button className="btn btn-info" onClick={handleInputForm}>Search</button>
      </div>
    </form>
    </div>
  )
}

export default Search