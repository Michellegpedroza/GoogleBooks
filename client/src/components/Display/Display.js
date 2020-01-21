import React, { useContext } from 'react'
import SearchContext from '../../utils/SearchContext'

const Display = () => {

  const { books, saveBook } = useContext(SearchContext)

  return (
    <div>
      {

        books.map(book => book.items.map((next, i) => (
          <div className="container">
            <div className="card p-3">
              <div className="card-header text-center">
                <h2 className="card-title" key={i}>{next.volumeInfo.title}</h2>
                    <h4 className="card-subtitle">{next.volumeInfo.authors}</h4>
              </div>
              <div className=" row pt-2">
                <div className="col-2">
                    <img className="pt-4 pb-4 pl-4" src={next.volumeInfo.imageLinks.smallThumbnail} alt='no' />
                    
                    <button className="btn btn-outline-info ml-4"><a href={next.volumeInfo.infoLink} target='_blank' rel="noopener noreferrer">View</a></button>
                    <button className="btn btn-outline-info" onClick={saveBook} id={i}>Save</button>
                </div>
                <div className="col-10">
                  <div className="card-body">
                    <p class="card-text">{next.volumeInfo.description}</p>
                  </div>
                </div>
              </div>
            </div>
            <br></br>
          </div>
        )))
      }
    </div>
  )
}

export default Display