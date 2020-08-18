import React from "react";
import { Link } from "react-router-dom";

export class ButtonReturnToMovies extends React.Component {

  render() {
    return (
      <> 
        <Link to="/" className="btn btn-primary">
          Return to my favourite movies
        </Link>
      </>
    );
  }
}