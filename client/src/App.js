import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import SavedPage from './pages/SavePage'
import SearchPage from './pages/SearchPage'

const App = () => {
  return (
    <Router>
      <div>
        <Link to='/'>Search</Link>
        <Link to='/saved'>Saved</Link>
        <Switch>
          <Route exact path='/'>
            <SearchPage />
          </Route>
          <Route path='/saved'>
            <SavedPage />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App