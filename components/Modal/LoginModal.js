import { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { phoneData } from "../../data";
import { passwordData } from "../../data";

const useStyles = makeStyles((theme) => ({
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
}));

export default function LoginModal() {
  const [open, setOpen] = useState(true);
  const [phone, setPhone] = useState("");
  const [showButton, setShowButton] = useState(true);
  const [loginPage, setLoginPage] = useState(true);
  const [passwordPage, setPasswordPage] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showLoginButton, setShowLoginButton] = useState(true);

  const classes = useStyles();

  const styleFlex = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  };
  const handlePhoneCorrect = (phoneValue) => {
    return phoneValue === phoneData;
  };
  const handleChange = (e) => {
    let { value } = e.target;
    if (value.length === 10) {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  };

  const handleCorrectPassword = (passwordValue) => {
    return passwordValue === passwordData;
  };

  const handleChangePassword = (e) => {
    let { value } = e.target;
    if (value.length >= 6) {
      setShowLoginButton(false);
    } else {
      setShowLoginButton(true);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLoginButton = () => {
    const passwordValue = document.getElementById(
      "standard-adornment-password"
    ).value;
    setPassword(passwordValue);
    if (handleCorrectPassword(passwordValue)) {
      setOpen(false);
    }
  };

  const handleContinueButton = () => {
    const phoneValue = document.getElementById("phone").value;
    setPhone(phoneValue);
    if (handlePhoneCorrect(phoneValue)) {
      setLoginPage(false);
      setPasswordPage(true);
    }
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        {/* Title - always open */}
        {(loginPage || passwordPage) && (
          <DialogTitle id="form-dialog-title">
            <div style={styleFlex}>
              <span>
                <img
                  src="/img/left-arrow.svg"
                  style={{
                    width: "24px",
                    height: "24px",
                    paddingRight: "10px",
                  }}
                ></img>
              </span>
              <h5 style={{ fontWeight: "bold" }}>
                Chào mừng bạn đã trở lại với Meete
              </h5>
              <span onClick={handleClose}>
                <img
                  src="/img/cancel.svg"
                  style={{ width: "24px", height: "24px", paddingLeft: "10px" }}
                ></img>
              </span>
            </div>
            {/* Login small text */}
            {loginPage && (
              <div style={styleFlex}>
                <small>Săn ưu đãi khủng nào!!!</small>
              </div>
            )}
            {/* Password small text */}
            {passwordPage && (
              <div style={styleFlex}>
                <small style={{ fontSize: ".65rem" }}>
                  Đăng nhập với số điện thoại {phoneData}
                </small>
              </div>
            )}
          </DialogTitle>
        )}
        <DialogContent>
          <DialogContentText></DialogContentText>
          {/* Login field */}
          {loginPage && (
            <TextField
              autoFocus
              margin="dense"
              id="phone"
              label="Nhập số điện thoại"
              type="text"
              fullWidth
              onChange={handleChange}
            />
          )}
          {/* Password field */}
          {passwordPage && (
            <div className={classes.root}>
              <FormControl className={clsx(classes.margin, classes.textField)}>
                <InputLabel htmlFor="standard-adornment-password">
                  Password
                </InputLabel>
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
              </FormControl>
            </div>
          )}
        </DialogContent>
        <DialogActions>
          {/* Continue button */}
          {loginPage && (
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              disabled={showButton}
              onClick={handleContinueButton}
            >
              Tiếp tục
            </Button>
          )}
          {/* Login button */}
          {passwordPage && (
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              disabled={showLoginButton}
              onClick={handleLoginButton}
            >
              Đăng nhập
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}
