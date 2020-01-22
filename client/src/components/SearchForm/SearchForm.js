import React, { useContext } from 'react'
import SearchContext from '../../utils/SearchContext'

const Search = () => {

  const { book, handleInputChange, handleInputForm } = useContext(SearchContext)

  return (
    <div className="container">
      <div className="jumbotron bg-light">
      <form>
        <div className="form-group mx-sm-5">
          <label className="display-4 text-warning" htmlFor="book">Search For A Book</label>
          <input className="form-control" type='text' name='book' id='book' value={book} onChange={handleInputChange} />
        </div>
        <div className="form-group mt-2 mx-sm-5">
          <button className="btn btn-dark btn-block text-white" onClick={handleInputForm}>Search</button>
        </div>
      </form>
      </div>
      <br></br>
    </div>
  )
}

export default Search