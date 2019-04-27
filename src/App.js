import React from 'react'
import MainPage from "./MainPage"
import Search from "./Search"
import {Route} from "react-router-dom"
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {  books : [],
    showSearchPage: false
  }
    componentDidMount() {
        BooksAPI.getAll().then(res => this.setState({
            books : res
        }) )
    }
    handleSelect = (book,shelf) => {
      BooksAPI.update(book,shelf).then(() => (
        BooksAPI.getAll().then((books) => {
          this.setState({books})
        })
      ))
  
  
    }

  render() {
    return (
      
      <div>

        <Route exact path="/" render={() => (
        <MainPage handleSelect={this.handleSelect} books={this.state.books} />
      )}
      />

      <Route path="/search" render={() => (
        <Search handleSelect={this.handleSelect}  />
      )}
      />

      </div>
      
    )
  }
}

export default BooksApp
