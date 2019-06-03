import React, { Component } from "react";
import {url} from '../constants';

class AddBook extends Component {
  state = {
    title: "",
    subtitle: "",
    isbn: "",
    abstract: "",
    numPages: 0,
    author: "",
    publisher: ""
  };

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const {title, subtitle, isbn, abstract, numPages, author, publisher} = this.state;
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
      .then(data => {
        console.log("Buch wurde erstellt", data);
      });
  }

  render() {
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
                        onChange={e => this.handleChange(e)}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col">
                    <div class="form-group">
                      <label for="formGroupExampleInput2">Verlag</label>
                      <input
                        type="text"
                        class="form-control"
                        id="publisher"
                        placeholder="Verlag"
                        onChange={e => this.handleChange(e)}
                      />
                    </div>
                  </div>
                </div>
                <input type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddBook;
