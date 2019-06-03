import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import App from "./App";
import NavBar from "./NavBar";
import BookDetails from "./Pages/BookDetails";
import AddBook from "./Pages/AddBook";
import UpdateBook from "./Pages/UpdateBook";

const AppRouter = () => {
  return (
    <Router>
    <NavBar/>
      <Route exact path="/" component={App} />
      <Route path="/books/:id" component={BookDetails} />
      <Route path="/addBook" component={AddBook} />
      <Route path="/update/:id" component={UpdateBook} />
    </Router>
  );
};

export default AppRouter;
