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
    //const { projects } = this.state;
    const filteredProjects = projects.filter((project) =>
      project.titolo.toLowerCase().includes(searchField.toLocaleLowerCase())
    );

    return (
      <div class="text-gray-600 body-font">
        <SearchBox
          placeholder="cerca progetto"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList projects={filteredProjects} />
      </div>
    );
  }
}

export default Cards;
