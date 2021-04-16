import React, { Component } from "react";

class Cards extends Component {
  constructor() {
    super();
    this.state = {
      sede: [],
    };
  }

  componentDidMount() {
    fetch("https://corner-mern.herokuapp.com/api/projects/getAll")
      .then((response) => response.json())
      .then((istituto) => this.setState({ sede: istituto }));
  }

  render() {
    const { istituto } = this.state;

    return (
      <div className="text-gray-600 body-font">
        <div className="container px-5 pt-10 pb-5 mx-auto sm:px-6 lg:px-8"></div>
      </div>
    );
  }
}
