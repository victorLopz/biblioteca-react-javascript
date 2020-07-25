import React, { Component } from "react";
import axios from "axios";

class Formulario extends Component {
  //state = {};
  constructor(props) {
    super(props);

    this.state = {
      namelib: "",
      nameautor: "",
      file: null,
    };
  }

  ChangeHandler = (e) => {
    if (e.target.name === "file") {
      this.setState({ [e.target.name]: e.target.files[0] });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  submitHandler = async (e) => {
    e.preventDefault();
    console.log(this.state);
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:8000/api/articles/",
        data: {
          title: this.state.namelib,
          body: this.state.nameautor,
        },
      });
      console.log(response);
    } catch (e) {
      console.log(e);
    }
    console.log("termino");
  };

  render() {
    const { namelib, nameautor } = this.state;
    console.log(this.state);
    return (
      <form className="form-register" onSubmit={this.submitHandler}>
        <h4>Formulario Registro</h4>

        <input
          value={namelib}
          name="namelib"
          type="text"
          onChange={this.ChangeHandler}
          className="controls"
          placeholder="Ingrese el nombre del Autor"
          required="true"
        ></input>

        <input
          value={nameautor}
          name="nameautor"
          onChange={this.ChangeHandler}
          type="text"
          required="true"
          className="controls"
          placeholder="Ingrese el nombre del Libro"
        ></input>

        <input
          type="file"
          className="text"
          name="file"
          onChange={this.ChangeHandler}
        />
        <button type="submit" class="btn btn-success btn-block">
          Registrar
        </button>
      </form>
    );
  }
}

export default Formulario;
