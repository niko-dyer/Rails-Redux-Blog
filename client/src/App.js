import React, { Component } from 'react'
import './App.css'
import { Container } from 'semantic-ui-react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import FetchBlogs from './components/FetchBlogs'

class App extends Component {
  render() {
    return (
      <Container>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/blogs' component={FetchBlogs} />
        </Switch>
      </Container>
    )
  }
}

export default App
