import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  root: {},
  swatchPiece: {
    fontFamily: "Arial Narrow",
    fontSize: "2vh",
    height: "12vh",
    margin: "0.5vh",
    marginTop: "2vh",
    padding: "1vh",
    textAlign: "center",
    transition: "background-color 1s",
    width: "12vh",
    "&:hover $tooltiptext": {
      visibility: "visible",
      transition: "visibility: 10s",
    },
  },
  tooltiptext: {
    backgroundColor: "#282c34",
    borderRadius: "0.5vh",
    color: "#fff",
    padding: "1vh",
    position: "absolute",
    textAlign: "center",
    visibility: "hidden",
    zindex: "1",
  },
});
