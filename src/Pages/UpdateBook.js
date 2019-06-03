import React, { Component } from "react";
import { url } from "../constants";

class UpdateBook extends Component {
  state = {
    title: "",
    subtitle: "",
    isbn: "",
    abstract: "",
    numPages: 0,
    author: "",
    publisher: ""
  };

  componentDidMount() {
    const path = this.props.location.pathname.split('/');
    fetch(`${url}/books/${path[2]}`)
      .then(response => response.json())
      .then(book =>
        this.setState({
          title: book.title,
          subtitle: book.subtitle,
          isbn: book.isbn,
          abstract: book.abstract,
          numPages: book.numPages,
          author: book.author,
          publisher: book.publisher
        })
      );
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const {
      title,
      subtitle,
      isbn,
      abstract,
      numPages,
      author,
      publisher
    } = this.state;
    fetch(`${url}/books`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        subtitle,
        isbn,
        abstract,
        numPages,
        author,
        publisher
      })
    })
      .then(response => response.json)
      .then(data => console.log("Buch wurde erstellt", data));
  }

  render() {
    const { abstract, author, isbn, numPages, title, subtitle } = this.state;
    return (
      <div>
        <div className="container">
          <div className="row mt-5">
            <div className="col-sm">
              <form onSubmit={e => this.handleSubmit(e)}>
                <div className="form-row">
                  <div className="col">
                    <div class="form-group">
                      <label for="formGroupExampleInput">Abstract</label>
                      <input
                        type="text"
                        class="form-control"
                        id="abstract"
                        placeholder="Abstract"
                        value={abstract}
                        onChange={e => this.handleChange(e)}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div class="form-group">
                      <label for="formGroupExampleInput2">Author</label>
                      <input
                        type="text"
                        class="form-control"
                        id="author"
                        placeholder="Author"
                        value={author}
                        onChange={e => this.handleChange(e)}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col">
                    <div class="form-group">
                      <label for="formGroupExampleInput2">ISBN</label>
                      <input
                        type="text"
                        class="form-control"
                        id="isbn"
                        placeholder="ISBN"
                        value={isbn}
                        onChange={e => this.handleChange(e)}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div class="form-group">
                      <label for="formGroupExampleInput2">Seitenanzahl</label>
                      <input
                        type="number"
                        class="form-control"
                        id="numPages"
                        placeholder="Seitenanzahl"
                        value={numPages}
                        onChange={e => this.handleChange(e)}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col">
                    <div class="form-group">
                      <label for="formGroupExampleInput2">Title</label>
                      <input
                        type="text"
                        class="form-control"
                        id="title"
                        placeholder="Title"
                        value={title}
                        onChange={e => this.handleChange(e)}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div class="form-group">
                      <label for="formGroupExampleInput2">Subtitle</label>
                      <input
                        type="text"
                        class="form-control"
                        id="subtitle"
                        placeholder="Subtitle"
                        value={subtitle}
                        onChange={e => this.handleChange(e)}
                      />
                    </div>
                  </div>
                </div>
                <input type="submit" value="Speichern" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateBook;
