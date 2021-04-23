import React from "react";

export const AddProject = () => {
  return (
    <div>
      <button
        className="px-4 py-2 font-bold text-white bg-gray-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        type="button"
        onClick={() => (
          fetch("https://corner-mern.herokuapp.com/api/projects/add"),
          {
            method: "POST",
            headers: { "x-auth-token": localStorage.getItem("token") },
            body: {
              titolo: "",
              materia: "",
              partecipanti: "",
              date: "",
              descrizione: "",
              contenuto: localStorage.getItem("content"),
              image_src: "",
            },
          }
        )}
      >
        Aggiungi Progetto
      </button>
    </div>
  );
};

export default AddProject;
