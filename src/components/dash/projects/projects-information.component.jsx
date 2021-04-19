import React, { Component, Fragment } from "react";
import Projects from "../projects/projects.component";
import Profile from "../profile/profile.component";
// import Cards from "../../layout/cards/card-class.component";
import CardList from "../../card-list-teacher/card-list-teacher.component";

class ProjectsInformation extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
    };
  }

  async componentDidMount() {
    // console.log("ID component di mount ----", localStorage.getItem("id"));
    const response = await fetch(
      `https://corner-mern.herokuapp.com/api/projects/getAllByTeacher/${
        (localStorage.getItem("id"))
      }`
    )
      .then((response) => response.json())
      .then((project) => this.setState({ projects: project }));
    // console.log("response", this.state.projects);
  }

  render() {
    return (
      <main className="relative bg-gray-100 dark:bg-gray-800 rounded-2xl">
        <div className="flex items-start justify-between">
          <div className="relative hidden h-screen my-4 ml-4 shadow-lg lg:block w-80">
            <div className="h-full grid-flow-row-dense bg-white rounded-2xl dark:bg-gray-700">
              <div className="flex items-center justify-center pt-6"></div>
              <nav className="mt-6">
                <div>
                  <Profile />
                  <Projects />
                </div>
              </nav>
            </div>
          </div>
          <div className="bg-scroll ">
            <CardList projects={this.state.projects} />
          </div>
        </div>
      </main>
    );
  }
}

export default ProjectsInformation;
