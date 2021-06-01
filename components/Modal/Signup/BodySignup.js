import TextField from "@material-ui/core/TextField";

import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { useStyles } from "../style";

const BodySignup = ({
  error,
  handleClickShowPassword,
  handleInput,
  handleMouseDownPassword,
  showPassword,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <TextField
          name="preName"
          label="Họ và tên đệm"
          error={error.preNameError && true}
          helperText={error.preName}
          id="standard-start-adortment-preName"
          className={clsx(classes.margin, classes.textFieldSignup)}
          onChange={handleInput}
        />
        <FormControl className={clsx(classes.margin, classes.textFieldSignup)}>
          <InputLabel htmlFor="standard-adornment-signup">Mật khẩu</InputLabel>
          <Input
            name="password"
            id="standard-adornment-signup"
            type={showPassword ? "text" : "password"}
            error={error.passwordError && true}
            onChange={handleInput}
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
      <div>
        <TextField
          name="name"
          label="Tên"
          id="standard-start-adortment-name"
          error={error.nameError && true}
          helperText={error.name}
          onChange={handleInput}
          className={clsx(classes.margin, classes.textFieldSignup)}
        />
        <FormControl className={clsx(classes.margin, classes.textFieldSignup)}>
          <InputLabel htmlFor="standard-adornment-signup-reenter-password">
            Xác nhận mật khẩu
          </InputLabel>
          <Input
            name="rePassword"
            id="standard-adornment-signup-reenter-password"
            type={showPassword ? "text" : "password"}
            error={error.rePasswordError && true}
            onChange={handleInput}
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
      <div>
        <TextField
          name="email"
          label="Email"
          id="standard-start-adortment-email"
          error={error.emailError && true}
          helperText={error.email}
          onChange={handleInput}
          className={clsx(classes.margin, classes.textFieldSignup)}
        />
      </div>
    </div>
  );
};

export default BodySignup;
