import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  root: {
    maxHeight: "40vh",
    maxWidth: "30vw",
    "& .ReactPiano__Key:nth-child(5)": {
      border: "2px solid red",
    },
  },
});
