import React from "react";
import { url } from "../constants";
import books from "../Assets/books.jpg";
import styled from 'styled-components';

const Fett = styled.span`
  font-weight: 600;
`;

class BookDetails extends React.Component {
  state = {
    book: {},
    error: false
  };
  componentDidMount() {
    fetch(`${url}${this.props.location.pathname}`)
      .then(response => response.json())
      .then(book => this.setState({ book }))
  }
  render() {
    const {
      title,
      subtitle,
      abstract,
      author,
      isbn,
      numPages
    } = this.state.book;
    return (
      <div className="container">
        <div className="row mt-3">
          <h1>{title}</h1>
        </div>
        <div className="row">
          <img src={books} alt="" className="img-fluid rounded mx-auto" />
        </div>
        <div className="row mt-3">
          <h2>{subtitle}</h2>
        </div>
        <div classname="row">
        <p>{abstract}</p>
        </div>
        <div className="row">
          <div className="col-8">
            <ul class="list-group">
              <li class="list-group-item">
                <Fett>Author: </Fett>
                {author}
              </li>
              <li class="list-group-item">
                <Fett>Isbn: </Fett>
                {isbn}
              </li>
              <li class="list-group-item">
                <Fett>Seitenanzahl: </Fett>
                {numPages}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default BookDetails;
