import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { useStyles } from "../style";

const BodyPassword = ({
  showPassword,
  handleChangePassword,
  handleClickShowPassword,
  handleForgetPasswordButton,
  handleMouseDownPassword,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <FormControl className={clsx(classes.margin, classes.textField)}>
        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
        <Input
          id="standard-adornment-password"
          type={showPassword ? "text" : "password"}
          onChange={handleChangePassword}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
        <small onClick={handleForgetPasswordButton}>
          <a style={{ float: "right", textDecoration: "underline" }}>
            Quên mật khẩu?
          </a>
        </small>
      </FormControl>
    </div>
  );
};

export default BodyPassword;
