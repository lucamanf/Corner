import React, { Component } from "react";
import { CardList } from "../../card-list/card-list.component";

import { SearchBox } from "../../search-box/search-box.component";

class Cards extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://corner-mern.herokuapp.com/api/projects/getAll")
      .then((response) => response.json())
      .then((project) => this.setState({ projects: project }));
  }

  render() {
    const { projects, searchField } = this.state;
    const filteredProjects = projects.filter((project) =>
      project.titolo.toLowerCase().includes(searchField.toLocaleLowerCase())
    );

    return (
      <div className="text-gray-600 body-font">
        <div className="container px-5 pt-10 pb-5 mx-auto sm:px-6 lg:px-8">
          <SearchBox
            handleChange={(e) => this.setState({ searchField: e.target.value })}
          />
        </div>
        <CardList projects={filteredProjects} />
      </div>
    );
  }
}

export default Cards;
