import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { url } from "./constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";

const Card = styled.div`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const Button = styled.button`
  border-radius: 5px;
  transition: 0.2s all ease;
  :hover {
    background-color: grey;
    color: white;
  }
`;

const TrashIcon = styled.span`
  cursor: pointer;
  transition: 0.2s all ease;
  :hover {
    color: red;
  }
`;

const PenIcon = styled(Link)`
  color: black;
  transition: 0.2s all ease;
  :hover {
    color: blue;
  }
`;

class BookCard extends React.Component {
  handleDelete() {
    const { isbn, title } = this.props.book;
    if (window.confirm(`Bist du sicher das du ${title} löschen möchtest?`)) {
      fetch(`${url}/books/${isbn}`, {
        method: "delete"
      })
        .then(response => response.json())
        .then(data => console.log("Buch wurde gelöscht", data));
    }
  }

  render() {
    const { book } = this.props;
    const { isbn, title } = book;
    return (
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <Card className="card mt-2">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-8">
                    <h5 className="card-title">{title}</h5>
                  </div>
                  <div className="col-sm-4">
                    <TrashIcon>
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="float-right"
                        onClick={() => this.handleDelete()}
                      />
                    </TrashIcon>
                    <PenIcon to={'/update/' + isbn}>
                      <FontAwesomeIcon
                        icon={faPen}
                        className="float-right mr-4"
                      />
                    </PenIcon>
                  </div>
                </div>
                <p className="card-subtitle">ISBN {isbn}</p>
                <p>{book.subtitle}</p>
                <Link to={"/books/" + isbn} isbn={isbn}>
                  <Button>Mehr Informationen</Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default BookCard;
