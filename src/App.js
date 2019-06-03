import React, { Component } from "react";
import BookCard from "./BookCard";
import { url } from "./constants";

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      searchTerm: ""
    };
  }

  componentDidMount() {
    fetch(`${url}/books`)
      .then(response => response.json())
      .then(books => this.setState({ books }));
  }

  render() {
    const { books, searchTerm } = this.state;
    const filteredBooks = books.filter(book => {
      return book.isbn.toLowerCase().includes(searchTerm.toLowerCase());
    });
    return (
      <div>
        <div className="container">
          <div className="row mt-3">
            <div className="col-sm-6">
              <h1>Alle Bücher</h1>
            </div>
            <div className="col-sm-6">
              <form class="form-inline  float-right">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="ISBN"
                  aria-label="Search"
                  onChange={e => {
                    this.setState({
                      searchTerm: e.target.value
                    });
                  }}
                />
              </form>
            </div>
          </div>

          {filteredBooks &&
            filteredBooks.map(book => (
              <BookCard
                key={book.isbn}
                book={book}
                bookWasDeleted={this.bookWasDeleted}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default App;
