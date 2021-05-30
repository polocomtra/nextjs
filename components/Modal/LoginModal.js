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
import { OTPkey } from "../../data";

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
  textFieldSignup: {
    width: "32ch",
  },
}));

export default function LoginModal() {
  const [open, setOpen] = useState(true);
  // Login Page
  const [phone, setPhone] = useState("");
  const [showButton, setShowButton] = useState(true);
  const [loginPage, setLoginPage] = useState(true);

  //Password Page
  const [passwordPage, setPasswordPage] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showLoginButton, setShowLoginButton] = useState(true);

  //Reset password Page
  const [resetPasswordPage, setResetPasswordPage] = useState(false);
  const [showResetPasswordButton, setShowResetPasswordButton] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [reEnterNewPassword, setReEnterNewPassword] = useState("");

  //OTP Page
  const [OTPPage, setOTPPage] = useState(false);
  const [OTP, setOTP] = useState("");
  const [showAuthButton, setShowAuthButton] = useState(false);

  //Signup Page
  const [signupPage, setSignupPage] = useState(false);
  const [showSignupButton, setShowSignupButton] = useState(false);
  const [values, setValues] = useState({
    name: "",
    preName: "",
    password: "",
    rePassword: "",
    email: "",
  });

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

  //handle Business Logic

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

  const handleChangeNewPassword = (e) => {
    setNewPassword(e.target.value);
    console.log(newPassword);
  };

  const handleChangeReEnterNewPassword = (e) => {
    setReEnterNewPassword(e.target.value);
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
    } else {
      setLoginPage(false);
      setSignupPage(true);
    }
  };

  const handleResetPasswordButton = () => {
    if (newPassword === reEnterNewPassword) {
      setResetPasswordPage(false);
      setOTPPage(true);
    } else {
      alert("Password not match");
    }
  };

  const handleClickAuthButton = () => {
    if (OTP === OTPkey) {
      setOTPPage(false);
      setPasswordPage(true);
    } else {
      alert("OTP not match");
    }
  };

  const handleClickSignupButton = () => {
    let { name, preName, password, rePassword, email } = values;
    if (
      name &&
      preName &&
      password.length === 6 &&
      password === rePassword &&
      email
    ) {
      setOpen(false);
    }
  };

  const handleChangeSignup = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleForgetPasswordButton = () => {
    setPasswordPage(false);
    setResetPasswordPage(true);
  };

  //Render Component
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

        {/* Reset password */}
        {resetPasswordPage && (
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
              <h5 style={{ fontWeight: "bold" }}>Khôi phục mật khẩu</h5>
              <span onClick={handleClose}>
                <img
                  src="/img/cancel.svg"
                  style={{ width: "24px", height: "24px", paddingLeft: "10px" }}
                ></img>
              </span>
            </div>
            {/* Resetpassword small text */}
            {resetPasswordPage && (
              <div style={styleFlex}>
                <small style={{ fontSize: ".65rem" }}>
                  Tạo mật khẩu mới cho tài khoản {phoneData}
                </small>
              </div>
            )}
          </DialogTitle>
        )}

        {/* OTP */}
        {OTPPage && (
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
              <h5 style={{ fontWeight: "bold" }}>Nhập mã xác thực</h5>
              <span onClick={handleClose}>
                <img
                  src="/img/cancel.svg"
                  style={{ width: "24px", height: "24px", paddingLeft: "10px" }}
                ></img>
              </span>
            </div>
            {/* OTP small text */}
            {OTPPage && (
              <div style={styleFlex}>
                <small style={{ fontSize: ".65rem" }}>
                  Kiểm tra mã OTP đã gửi về email nguyentientai.3326@gmail.com
                </small>
              </div>
            )}
          </DialogTitle>
        )}

        {/* Signup page */}
        {signupPage && (
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
              <h5 style={{ fontWeight: "bold" }}>Tạo tài khoản mới</h5>
              <span onClick={handleClose}>
                <img
                  src="/img/cancel.svg"
                  style={{ width: "24px", height: "24px", paddingLeft: "10px" }}
                ></img>
              </span>
            </div>
            {/* Signup small text */}
            {signupPage && (
              <div style={styleFlex}>
                <small style={{ fontSize: ".65rem" }}>
                  Số điện thoại {phone} chưa có tài khoản MEETE, tạo ngay nào
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
                <small onClick={handleForgetPasswordButton}>
                  <a style={{ float: "right", textDecoration: "underline" }}>
                    Quên mật khẩu?
                  </a>
                </small>
              </FormControl>
            </div>
          )}

          {/* ResetPassword */}

          {/* NewPassword field */}
          {resetPasswordPage && (
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
          )}

          {/* OTP field */}
          {OTPPage && (
            <TextField
              autoFocus
              margin="dense"
              id="OTP"
              label="Nhập mã OTP"
              type="text"
              value={OTP}
              fullWidth
              onChange={(e) => setOTP(e.target.value)}
            />
          )}

          {/* Signup  form */}
          {signupPage && (
            <div className={classes.root}>
              <div>
                <TextField
                  label="Họ và tên đệm"
                  id="standard-start-adortment-preName"
                  className={clsx(classes.margin, classes.textFieldSignup)}
                  onChange={handleChangeSignup("preName")}
                />
                <FormControl
                  className={clsx(classes.margin, classes.textFieldSignup)}
                >
                  <InputLabel htmlFor="standard-adornment-signup">
                    Mật khẩu
                  </InputLabel>
                  <Input
                    id="standard-adornment-signup"
                    type={showPassword ? "text" : "password"}
                    onChange={handleChangeSignup("password")}
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
                  label="Tên"
                  id="standard-start-adortment-name"
                  onChange={handleChangeSignup("name")}
                  className={clsx(classes.margin, classes.textFieldSignup)}
                />
                <FormControl
                  className={clsx(classes.margin, classes.textFieldSignup)}
                >
                  <InputLabel htmlFor="standard-adornment-signup-reenter-password">
                    Xác nhận mật khẩu
                  </InputLabel>
                  <Input
                    id="standard-adornment-signup-reenter-password"
                    type={showPassword ? "text" : "password"}
                    onChange={handleChangeSignup("rePassword")}
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
                  label="Email"
                  id="standard-start-adortment-email"
                  onChange={handleChangeSignup("email")}
                  className={clsx(classes.margin, classes.textFieldSignup)}
                />
              </div>
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

          {/* Reset password button */}

          {resetPasswordPage && (
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              disabled={showResetPasswordButton}
              onClick={handleResetPasswordButton}
            >
              Đổi mật khẩu
            </Button>
          )}

          {/* OTP Auth button */}

          {OTPPage && (
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              disabled={showAuthButton}
              onClick={handleClickAuthButton}
            >
              Xác thực
            </Button>
          )}

          {/* Signup button */}

          {signupPage && (
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              disabled={showSignupButton}
              onClick={handleClickSignupButton}
            >
              Đăng kí
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}
