import React,{Component} from 'react'
import SearchForBook from './SearchForBook'
import './Common/App.css'
import ListBooks from './Component/ListBooks'
import * as BooksAPI from './Common/BooksAPI'
import {Route,BrowserRouter } from 'react-router-dom'


export default class App extends Component {
  state = {
    books: []
  }

  _onShelfChanged = (book, shelf) => {
    book.shelf = shelf
    this.setState(state => ({
      books: state
        .books
        .filter(b => b.id !== book.id)
        .concat([book])
    }))
    BooksAPI.update(book, shelf)
  }

  componentDidMount() {
    BooksAPI
      .getAll()
      .then(books => {
        this.setState({books})
      })
  }




  render() {

    return (
      <div className="app">

        <Route
          path="/search"
          render={({history}) => (<SearchForBook
            onShelfChange={this._onShelfChanged}
            history={history}
            books={this.state.books}/>)}/>

        <Route
          path="/" exact
          render={() => (
            <div>
              <div className="list-books-title">
                <h1>MyReads App</h1>
              </div>
              <ListBooks onChange={this._onShelfChanged} books={this.state.books} />
            </div>
          )}/>


      </div>
    )
  }
}

