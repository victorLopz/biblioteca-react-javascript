import React from "react";
import "./App.css";
import Formulario from "./componentes/formulario";
import Tableview from "./componentes/tableview";

function App() {
  return (
    <div className="App container">
      <div>
        <div className="jumbotron">
          <Formulario className="Ezequiel" />
          <Tableview className="Ezequiel" />
        </div>
      </div>
    </div>
  );
}

export default App;
