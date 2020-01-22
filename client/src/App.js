import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import SavedPage from './pages/SavePage'
import SearchPage from './pages/SearchPage'
import NavBar from './components/NavBar'


const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            <NavBar/>
            <br></br>
            <SearchPage />
          </Route>
          <Route path='/saved'>
            <NavBar/>
            <br></br>
            <SavedPage />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App