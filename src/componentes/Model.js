import React, { Component } from "react";

function MyVerticallyCenteredModal(props) {
  return (
    <Model
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Model.Header closeButton>
        <Model.Title id="contained-modal-title-vcenter">
          Modal heading
        </Model.Title>
      </Model.Header>
      <Model.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Model.Body>
      <Model.Footer>
        <button onClick={props.onHide}>Close</button>
      </Model.Footer>
    </Model>
  );
}

function Model() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

//render(<Model />);
export default Model;
