import { Button, Typography } from "@mui/material";
import React from "react";
import { styles } from "./notesStyles";
const Notes = () => {
  return (
    <div>
      <Typography variant="pTage">Notes</Typography>
      <Typography color="primary">Notes</Typography>
      <Typography variant="h2">Notes</Typography>
      <Typography sx={styles}>Notes</Typography>
      <Button color="primary" variant="contained" type="submit">
        Submit
      </Button>
    </div>
  );
};

export default Notes;
