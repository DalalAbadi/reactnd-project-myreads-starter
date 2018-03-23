import React from 'react'

export default function Book (props){

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
            width: 128,
            height: 193,
            backgroundSize: 'cover',
            backgroundImage: `url("${props.book.imageLinks ? props.book.imageLinks.thumbnail : 'https://tsawaq.net/shop/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/n/o/no_cover_thumb.gif'
              }")`,  }}/>

          <div className="book-shelf-changer">
            <select onChange={(result) => props.onShelfChange(props.book, result.target.value)} value={props.book.shelf}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{props.book.title}</div>
        <div className="book-authors">{props.book.authors ? props.book.authors.join(", "):""}
        </div>
      </div>
    )





}

