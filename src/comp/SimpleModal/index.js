import { useState } from "react";

import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import hippo from "../../images/maps/hippo.webp";
import tiles1 from "../../images/tiles1.png";
import tiles2 from "../../images/tiles2.png";

export default function SimpleModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button
        style={{ backgroundColor: "rgb(80, 171, 92)" }}
        variant="contained"
        onClick={handleOpen}
      >
        ?
      </Button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div className="modal">
          <p>
            You are shown a map of an animal's <b>natural habitat</b>
          </p>
          <img style={{ height: "100px" }} src={hippo} alt="hippo territory" />
          <hr></hr>
          <p>
            Guess the <b>animal</b> in 6 tries
          </p>
          <p>Each guess can be <b>any combination</b> of 5 letters</p>
          <img style={{ height: "50px" }} src={tiles1} alt="tiles1" />
          <hr></hr> 
          <p>
            After each guess the color of the tiles will change to show you how
            close your guess was to the animal name
          </p>
          <img style={{ height: "50px" }} src={tiles2} alt="tiles2" /> 
        </div>
      </Modal>
    </div>
  );
}
