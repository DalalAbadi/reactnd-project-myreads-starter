import React from 'react'
import Book from './Book'

export default function BookShelf(props) {

  const {bookshelfTitle,onShelfChange,bookshelfBooks} = props

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{bookshelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {bookshelfBooks
            .map((book) => {
              return <li key={book.id}>
                <Book book={book} onShelfChange={onShelfChange}/>
              </li>
            })
          }
        </ol>
      </div>
    </div>
  )
}

