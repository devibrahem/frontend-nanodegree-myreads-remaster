import React, { Component } from 'react';
import Book from "./Book"
import {Link} from "react-router-dom"

class MainPage extends Component {
    state = {   }
    render() { 
        return ( 
            <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <Book handleSelect={this.props.handleSelect} book={this.props.books.filter(book => book.shelf==="currentlyReading")} />
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    
                    <Book handleSelect={this.props.handleSelect} book={this.props.books.filter(book => book.shelf==="wantToRead")} />
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    <Book handleSelect={this.props.handleSelect} book={this.props.books.filter(book => book.shelf==="read")} />
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link to="/search" ><button>Add a book</button></Link>
            </div>
          </div>
       
      </div>
         );
    }
}
 
export default MainPage;