import React,{Components} from 'react'
import BookShelf from './BookShelf'
import { BrowserRouter, Route, Link } from 'react-router-dom'



export default  function ListBooks(props){

  const wantToRead =props.books.filter((book) => book.shelf === 'wantToRead')
  const readCurrently = props.books.filter((book) => book.shelf === 'currentlyReading')
  const read =props.books.filter((book) => book.shelf === 'read')


  return(
    <div className="list-books">
      <div className="list-books-content">
        <div>
          <BookShelf
            bookshelfTitle='Currently Reading'
            onShelfChange={props.onChange}
            bookshelfBooks={readCurrently }

          />
          <BookShelf
            bookshelfTitle='Want to Read'
            onShelfChange={props.onChange}
            bookshelfBooks={wantToRead}

          />
          <BookShelf
            bookshelfTitle='Read'
            onShelfChange={props.onChange}
            bookshelfBooks={read}

          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  )
}
