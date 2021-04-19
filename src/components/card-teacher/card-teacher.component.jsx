import React from "react";

const Card = (props) => {
  const id_project = props.project.id;
  const headers = {
    "Content-Type": "application/json",
    "x-auth-token": localStorage.getItem("token"),
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods' : 'DELETE',
    'mode': 'cors',
  };

  return (
    <div className="flex items-center justify-center mb-4 lg:m-4">
      <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
        <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-xl md:max-w-lg">
          <img
            className="object-cover object-top w-full h-48"
            src={props.project.image_src}
            alt="Profile image"
          />
          <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
            <div className="flex justify-between grid-flow-row m-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-20 h-20 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() =>
                  fetch(
                    "https://corner-mern.herokuapp.com/api/projects/deleteProject",
                    {
                      
                      method: "DELETE",
                      headers: headers,
                      body: { id_project },
                    }
                  )
                    .then((res) => res.json())
                    .catch((err) => console.log("ELIMINAMI --------", err))
                }
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-20 h-20 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </div>
          </div>
          <div className="px-6 py-4">
            <h4 className="mb-2 text-xl font-bold truncate">
              {props.project.titolo}
              {console.log(props.project)}
            </h4>
            <p className="text-base text-gray-700 truncate">
              {props.project.descrizione}
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
              #{props.project.materia.materia}
            </span>
            <span className="inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
              #{props.project.materia.sede}
            </span>
            <span className="inline-block px-3 py-1 my-3 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
              #{props.project.created_by.nome}{" "}
              {props.project.created_by.cognome}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
