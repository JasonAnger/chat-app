import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Join from './Components/Join'
import Chat from './Components/Chat'

const App = () => {
  return(
    <Router>
    <Route path="/" exact component={Join} />
    <Route path="/chat" component={Chat} />
    </Router>
  )
}

export default App;
