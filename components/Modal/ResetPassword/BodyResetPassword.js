import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { useStyles } from "../style";

const BodyResetPassword = ({
  showPassword,
  newPassword,
  handleChangeNewPassword,
  handleChangeReEnterNewPassword,
  handleClickShowPassword,
  handleMouseDownPassword,
  reEnterNewPassword,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <FormControl className={clsx(classes.margin, classes.textField)}>
        <InputLabel htmlFor="standard-adornment-newpassword">
          Mật khẩu mới
        </InputLabel>
        <Input
          id="standard-adornment-newpassword"
          type={showPassword ? "text" : "password"}
          value={newPassword}
          onChange={handleChangeNewPassword}
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
      </FormControl>
      {/* Re-enter new password */}
      <FormControl className={clsx(classes.margin, classes.textField)}>
        <InputLabel htmlFor="standard-adornment-resetpassword">
          Xác nhận mật khẩu
        </InputLabel>
        <Input
          id="standard-adornment-resetpassword"
          type={showPassword ? "text" : "password"}
          value={reEnterNewPassword}
          onChange={handleChangeReEnterNewPassword}
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
      </FormControl>
    </div>
  );
};

export default BodyResetPassword;
