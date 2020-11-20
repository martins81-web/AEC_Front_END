import React from "react";
import { Link } from "react-router-dom";

export class ButtonAddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }


  render() {
    return (
      <> 
        <Link to="/AddMovie" className="btn btn-primary">
          Add a movie 
        </Link>
      </>
    );
  }
}