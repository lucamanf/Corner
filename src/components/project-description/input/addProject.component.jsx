import React from "react";

function AddProject() {
  const fetchData = () => {
    var myHeaders = new Headers();
    myHeaders.append("x-auth-token", localStorage.getItem("token"));
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      titolo: "Test",
      materia: "607458dd536594001537956c",
      partecipanti: "Test",
      anno_scolastico: "Test",
      descrizione: "Test",
      contenuto: { content: localStorage.getItem("content") },
      image_src: "Test.jpg",
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    return fetch(
      "https://corner-mern.herokuapp.com/api/projects/add",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <div>
      <button
        className="px-4 py-2 font-bold text-white bg-gray-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        type="button"
        onClick={fetchData}
      >
        Aggiungi Progetto
      </button>
    </div>
  );
}

export default AddProject;
