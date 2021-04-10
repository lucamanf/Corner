import React, { Component } from "react";
import { CardList } from "../../card-list/card-list.component";

// import { SearchBox } from "./components/search-box/search-box.component";

class Cards extends Component {
  constructor() {
    super();

    this.state = {
      project: [],
    };
  }

  // searchField: "",

  componentDidMount() {
    fetch("https://corner-mern.herokuapp.com/api/projects/getAll")
      .then((response) => response.json())
      .then((project) => this.setState({ projects: project }));
  }

  // render() {
  //   const { projects, searchField } = this.state;
  //   const filteredProject = projects.filter((project) =>
  //     project.nomemateria
  //       .toLowerCase()
  //       .includes(searchField.toLocaleLowerCase())
  //   );

  //   return (
  //     <div>
  //       <CardList project={filteredProject} />
  //     </div>
  //   );
  // }
  render() {
    const { project } = this.state;
    return <CardList project={project}>Here comes JSX !</CardList>;
  }
}

export default Cards;

{
  /* <SearchBox
placeholder="search project"
handleChange={(e) => this.setState({ searchField: e.target.value })}
/> */
}
