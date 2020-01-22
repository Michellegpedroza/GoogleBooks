import React, { useContext } from 'react'
import SavedContext from '../../utils/SavedContext'

const Saved = () => {

  const { savedBooks, handleRemoveBook } = useContext(SavedContext)

  return (
    <div>
      {savedBooks.map(saved => (
      <>
          <button>
            <a href={saved.link} target="_blank">
              View
            </a>
          </button>
          <h1>{saved.title}</h1>
          <h3>{saved.authors}</h3>
          <img src={saved.img} alt="no" />
          <p>{saved.description}</p>
          <button onClick={() => handleRemoveBook(saved._id)}>Delete</button>
      </>  
      ))}
    </div>
  )
}

export default Saved