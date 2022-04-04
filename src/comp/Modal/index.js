import { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

export default function SimpleModal() {
  // const classes = useStyles();
  // const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Instructions
      </Button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div className="modal">
          <div></div>
          <p>
            Guess the <b>animal</b> in 6 tries
          </p>
          <p>Each guess must be 5 letters</p>
          <p>
            After each guess the color of the tiles will change to show you how
            close your guess was to the animal name
          </p>
        </div>
      </Modal>
    </div>
  );
}
