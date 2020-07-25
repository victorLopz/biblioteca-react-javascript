import React, { Component, userObject } from "react";
import MaterialTable from "material-table";
import axios from "axios";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { FormGroup } from "@material-ui/core";

import "./addModel.css";
import addModal from "./addModel";

export default class Tableview extends Component {
  /*
  state = {
    data: [],
    mostrar: false,
  };
  */
  showModal = () => {
    this.setState({ mostrar: true });
  };

  hideModal = () => {
    this.setState({ mostrar: false });
  };

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      mostrar: false,
    };
  }

  getResults = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8000/api/articles/",
        userObject
      );

      this.setState({ data });
    } catch (e) {
      console.log(e);
    }
  };

  componentDidMount() {
    this.getResults();
  }

  columns = [
    {
      title: "LIBRO",
      field: "title",
    },
    {
      title: "AUTOR",
      field: "body",
    },
  ];

  actions = [
    {
      icon: "edit",
      tooltip: "Editar",
      onClick: async (event, rowData) => {
        //if (window.confirm("Tu deseas editar " + rowData.title)) {
        try {
          this.showModal();
          console.log(this.state.mostrar);

          console.log("Listo");
        } catch (e) {
          console.log(e);
        }
        //} else {
        //console.log("salio");
        //}
      },
    },
    (rowData) => ({
      icon: "delete",
      tooltip: "Borrar Libro",
      onClick: async (event, rowData) => {
        if (window.confirm("Desea eliminarlo " + rowData.title)) {
          try {
            const response = await axios({
              method: "delete",
              url: "http://localhost:8000/api/articles/" + rowData.id,
            });
            console.log(response);
            await this.getResults();
          } catch (e) {
            console.log(e);
          }
        }
      },
      disabled: rowData.birthYear < 2000,
    }),
  ];

  render() {
    return (
      <div>
        <MaterialTable
          title="Biblioteca"
          data={this.state.data}
          columns={this.columns}
          actions={this.actions}
        />
        <addModel
          mostrar={this.state.mostrar}
          handleClose={this.hideModal}
        ></addModel>
      </div>
    );
  }
}
