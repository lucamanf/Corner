import React, { Component } from "react";
import Projects from "../projects/projects.component";
import Profile from "../profile/profile.component";
import Spinner from "../../layout/Spinner";

class ProfileInformation extends Component {
  constructor() {
    super();
    this.state = {
      profiles: [],
      dataIsReturned: false,
      materie: [],
    };
  }

  async componentDidMount() {
    // console.log(localStorage.getItem("token"));
    const headers = {
      "Content-Type": "application/json",
      "x-auth-token": localStorage.getItem("token"),
    };
    const response = await fetch(
      "https://corner-mern.herokuapp.com/api/users/getProfile",
      { headers }
    );

    const data = await response.json();

    this.setState({ profiles: data[0], dataIsReturned: true });
  }

  render() {
    let profile;
    if (this.state.dataIsReturned) {
      profile = this.state;
      console.log(profile);
    } else {
      return <Spinner />;
    }

    let materie = profile.profiles.materie;
    this.state.materie = materie;

    console.log(profile.profiles);
    console.log("DOCENTE --------",this.state.materie);
    return (
      <main className="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-2xl">
        <div className="flex items-start justify-between">
          <div className="relative hidden h-screen my-4 ml-4 shadow-lg lg:block w-80">
            <div className="h-full bg-white rounded-2xl dark:bg-gray-700">
              <div className="flex items-center justify-center pt-6"></div>
              <nav className="mt-6">
                <div>
                  <Profile />
                  <Projects />
                </div>
              </nav>
            </div>
          </div>
          <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
            <div className="h-screen pt-2 pb-24 pl-2 pr-2 overflow-auto md:pt-0 md:pr-0 md:pl-0">
              <div className="flex justify-center sm:flex-row">
                <div className="md:w-2/3 sm:w-1/2 xl:w-9/12s">
                  <div className="w-full mb-4">
                    <div className="flex justify-center p-4 border-b">
                      <h2 className="text-2xl ">
                        Benvenuto {profile.profiles.nome}{" "}
                        {profile.profiles.cognome}
                      </h2>
                    </div>
                    <div className="w-full p-4 py-5 bg-white shadow-lg rounded-2xl dark:bg-gray-700">
                      <div className="p-4 space-y-1 border-b md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0">
                        <p className="text-gray-600">Nome</p>
                        <p>{profile.profiles.nome}</p>
                      </div>
                      <div className="p-4 space-y-1 border-b md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0">
                        <p className="text-gray-600">Cognome</p>
                        <p>{profile.profiles.cognome}</p>
                      </div>
                      <div className="p-4 space-y-1 border-b md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0">
                        <p className="text-gray-600">Email</p>
                        <p>{profile.profiles.email}</p>
                      </div>
                      <div className="p-4 space-y-1 border-b md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0">
                        <p className="text-gray-600">Ruolo</p>
                        <p className="capitalize">{profile.profiles.ruolo}</p>
                      </div>
                      <div className="p-4 space-y-1 border-b md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0">
                        <p className="text-gray-600">Materia</p>
                        <div className="grid-flow-row-dense">
                          {this.state.materie.map((materie) => (
                            <p>{materie.materia}</p>
                          ))}
                        </div>
                      </div>
                      <div className="p-4 space-y-1 border-b md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0">
                        <p className="text-gray-600">Sede</p>
                        <p>{profile.profiles.materie.sede}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default ProfileInformation;
