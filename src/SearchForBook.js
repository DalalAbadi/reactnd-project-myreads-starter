import React,{Component} from 'react'
import * as BooksAPI from './Common/BooksAPI';
import Book from './Component/Book';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import DebounceInput from 'react-debounce-input';
import SearchInput from './Component/SearchInput'
export default class SearchForBook extends Component {
  state = {
    allResults: []
  }

  renderResults(){
    if (this.state.allResults != [])
      return this.state.allResults.map(function(book, index){
        return(<li key={book.id + index}>
            <Book book={book} onShelfChange={this.props.onShelfChange}/>
          </li>

        );});


  }
  searchFor (text) {
    const query = text.text.target.value;
    if (!query) {
      this.setState({allResults: []});
    }
    BooksAPI.search(query, 20)
      .then(allResults => {
        if (!allResults ) {
          this.setState({allResults: []});
        }else {
          allResults = allResults.map((book) => {
            const bookShelf = this
              .props
              .books
              .find(b => b.id === book.id);
            book.shelf = bookShelf ? bookShelf.shelf : "none";
            return book;
          });

          this.setState({allResults:allResults});
        }
      });
  };

  render() {
    const {allResults} = this.state
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <SearchInput minLen={2} elementType="input" placeholderText="Search by title of book " onChange={this.searchFor.bind(this)}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {allResults && allResults.map((book, index) => (
                <li key={book.id + index}>
                  <Book book={book} onShelfChange={this.props.onShelfChange}/>
                </li>
              ))}
          </ol>
        </div>
      </div>

    )
  }
}

