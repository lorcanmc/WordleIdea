import React from "react";
// import { makeStyles } from '@material-ui/core/styles';
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// function rand() {
//     return Math.round(Math.random() * 20) - 10;
// }
function getModalStyle() {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
// const useStyles = makeStyles(theme => ({
//     modal: {
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     paper: {
//         position: 'absolute',
//         width: 450,
//         backgroundColor: theme.palette.background.paper,
//         boxShadow: theme.shadows[5],
//         padding: theme.spacing(2, 4, 3),
//     },
// }));
export default function SimpleModal() {
  // const classes = useStyles();
  // const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
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
