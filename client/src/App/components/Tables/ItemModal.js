import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function ItemModal({ asset }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(asset);

  return (
    <>
      <button onClick={handleShow} className="modal-btn">
        {asset.assetName}
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> {asset.assetName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span>Quantity: {asset.quantity}</span>

          <a href="https://apexcharts.com/react-chart-demos/" target="__blank">
            Example Chart using ApexCharts
          </a>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            BUY
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
