import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import modalUpdatest from "./modalUpdatest.css";

class UpdatedModal extends Component {
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
        method: "put",
        url: "http://localhost:8000/api/articles/" + this.props.id,
        data: {
          title: this.state.namelib,
          body: this.state.nameautor,
        },
      });
      this.props.history.push("/");
      console.log(response);
    } catch (e) {
      console.log(e);
    }
    console.log("termino");
  };

  getData = async (id) => {
    try {
      const data = await axios({
        method: "get",
        url: "http://localhost:8000/api/articles/" + id,
      });
      console.log(data.data);
      this.setState({
        namelib: data.data.title,
        nameautor: data.data.body,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData(this.props.id);
    console.log(this.props.id);
  }

  render() {
    const { namelib, nameautor } = this.state;
    console.log(this.state);
    return (
      <form className="forma" onSubmit={this.submitHandler}>
        <h4>Actualizar Registro</h4>

        <input
          value={namelib}
          name="namelib"
          type="text"
          onChange={this.ChangeHandler}
          className="controls2"
          placeholder="Ingrese el nombre del Autor"
          required="true"
        ></input>

        <input
          value={nameautor}
          name="nameautor"
          onChange={this.ChangeHandler}
          type="text"
          required="true"
          className="controls2"
          placeholder="Ingrese el nombre del Libro"
        ></input>

        <input
          type="file"
          className="text"
          name="file"
          className="controls2"
          onChange={this.ChangeHandler}
        />
        <button type="submit" class="btn btn-success btn-block">
          Registrar
        </button>
      </form>
    );
  }
}

export default UpdatedModal;
