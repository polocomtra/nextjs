import { makeStyles } from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
    margin: {
      margin: theme.spacing(0),
    },
    textField: {
      width: "100%",
    },
    textFieldSignup: {
      width: "32ch",
    },
  }));

export const styleFlex = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  };