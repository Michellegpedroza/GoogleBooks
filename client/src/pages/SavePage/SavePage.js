import React, { useState } from 'react'
import SavedContext from '../../utils/SavedContext'
import Saved from '../../components/Saved'
import NavBar from '../../components/NavBar'
import BookAPI from '../../utils/BookAPI'

const { getBooks, deleteBook } = BookAPI

const SavedPage = () => {

  const [savedState, setSavedState] = useState({
    savedBooks: []
  })

  savedState.handleRemoveBook = (id) => {
    deleteBook(id)
      .then(() => {
        let savedBooks = JSON.parse(JSON.stringify(savedState.savedBooks))
        let savedFiltered = savedBooks.filter(saved => saved._id !== id)
        setSavedState({ ...savedState, savedBooks: savedFiltered })
      })
      .catch(e => console.error(e))
  }

  const use = (() => {
    getBooks()
      .then(({ data: savedBooks }) => {
        setSavedState({ ...savedState, savedBooks })
        console.log(savedBooks)
      })
      .catch(e => console.error(e))
  }, [])

  return (
    <SavedContext.Provider value={savedState}>
      <NavBar />
      <br></br>
      <Saved />
    </SavedContext.Provider>
  )

}


export default SavedPage