import React,{Component} from 'react'

export default class Book extends Component{

  componentWillMount(){}

  render() {
    const {shelf,title,authors,imageLinks} = this.props.book;

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
            width: 128,
            height: 193,
            backgroundSize: 'cover',
            backgroundImage: `url("${ imageLinks.thumbnail}")`,  }}/>

          <div className="book-shelf-changer">
            <select onChange={this.ShelfUpdated} value={shelf}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors ? authors.join(", "):""}
        </div>
      </div>
    )
  }



  ShelfUpdated = (result) => {
    console.log(result)
    const shelf = result.target.value;
    this.props.onShelfChange(this.props.book, shelf);
  };



}

