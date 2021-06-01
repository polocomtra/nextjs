import { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { passwordData, phoneData } from "../../data";
import { OTPkey } from "../../data";
import { useStyles } from "./style";
import Header from "./Login/HeaderLogin";
import HeaderResetPassword from "./ResetPassword/HeaderResetPassword";
import HeaderOTP from "./OTP/HeaderOTP";
import HeaderSignup from "./Signup/HeaderSignup";
import BodyLogin from "./Login/BodyLogin";
import BodyPassword from "./Password/BodyPassword";
import BodyResetPassword from "./ResetPassword/BodyResetPassword";
import BodyOTP from "./OTP/BodyOTP";
import FooterLogin from "./Login/FooterLogin";
import FooterPassword from "./Password/FooterPassword";
import FooterOTP from "./OTP/FooterOTP";
import FooterSignup from "./Signup/FooterSignup";
import FooterResetPassword from "./ResetPassword/FooterResetPassword";
import BodySignup from "./Signup/BodySignup";

export default function LoginModal({ showModal, handleSuccessLogin }) {
  const [open, setOpen] = useState(true);
  // Login Page
  const [phone, setPhone] = useState("");
  const [showButton, setShowButton] = useState(true);
  const [loginPage, setLoginPage] = useState(true);
  const [checkPhoneValid, setCheckPhoneValid] = useState(false);
  const [phoneValidMessage, setPhoneValidMessage] = useState("");

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
  const [updatePassword, setUpdatePassword] = useState("");

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
  const [error, setError] = useState({
    preName: "",
    preNameError: false,
    name: "",
    nameError: false,
    password: "",
    passwordError: false,
    rePassword: "",
    rePasswordError: false,
    email: "",
    emailError: false,
  });

  const handlePhoneCorrect = (phoneValue) => {
    return phoneValue === phoneData;
  };
  const handleChange = (e) => {
    let { value } = e.target;
    setPhone(value);
    setCheckPhoneValid(true);
    setPhoneValidMessage("SĐT không hợp lệ");
    if (value.length === 10) {
      setShowButton(false);
      setCheckPhoneValid(false);
      setPhoneValidMessage("");
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
    showModal(false);
  };

  const handleLoginButton = () => {
    let passwordValue = password;
    setPassword(passwordValue);
    if (
      handleCorrectPassword(passwordValue) ||
      passwordValue === updatePassword
    ) {
      setOpen(false);
      handleSuccessLogin("Nguyễn Tiến Tài");
    }
  };

  const handleContinueButton = () => {
    console.log(phone);
    let phoneValue = phone;
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
      setUpdatePassword(newPassword);
      setOTPPage(true);
    } else {
      alert("Password not match");
      setReEnterNewPassword("");
    }
  };

  const handleClickAuthButton = () => {
    if (OTP === OTPkey) {
      setOTPPage(false);
      setPasswordPage(true);
    } else {
      alert("OTP not match");
      setOTP("");
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
    } else {
      alert("All fields must be fill");
    }
  };

  const validateEmail = (value) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value.toLowerCase());
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    switch (name) {
      case "preName":
        if (!value) {
          setError({
            ...error,
            preName: "Tên đệm không được trống",
            preNameError: true,
          });
        } else {
          setError({ ...error, preName: "", preNameError: false });
        }
        break;
      case "name":
        if (!value) {
          setError({ ...error, name: "Tên không được trống", nameError: true });
        } else {
          setError({ ...error, name: "", nameError: false });
        }
        break;
      case "password":
        if (!value) {
          setError({
            ...error,
            password: "Mật khẩu không được trống",
            passwordError: true,
          });
        } else {
          setError({ ...error, password: "", passwordError: false });
        }
        break;
      case "rePassword":
        if (!value) {
          setError({
            ...error,
            rePassword: "Mật khẩu không được trống",
            rePasswordError: true,
          });
        } else {
          setError({ ...error, rePassword: "", rePasswordError: false });
        }
        break;
      case "email":
        if (!validateEmail(value) || !value) {
          setError({
            ...error,
            email: "Email không được trống và phải đúng định dạng",
            emailError: true,
          });
        } else {
          setError({ ...error, email: "", emailError: false });
        }
        break;
    }
  };

  const handleForgetPasswordButton = () => {
    setPasswordPage(false);
    setResetPasswordPage(true);
  };

  const handleBackFromPasswordToLogin = () => {
    setPasswordPage(false);
    setLoginPage(true);
  };

  const handleBackFromResetPasswordToPassword = () => {
    setResetPasswordPage(false);
    setPasswordPage(true);
  };

  const handleBackFromOTPToResetPassword = () => {
    setOTPPage(false);
    setResetPasswordPage(true);
  };

  const handleBackFromSignupToLogin = () => {
    setSignupPage(false);
    setLoginPage(true);
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
          <Header
            passwordPage={passwordPage}
            handleBackFromPasswordToLogin={handleBackFromPasswordToLogin}
            handleClose={handleClose}
            loginPage={loginPage}
            phoneData={phoneData}
          />
        )}

        {/* Reset password */}
        {resetPasswordPage && (
          <HeaderResetPassword
            handleBackFromResetPasswordToPassword={
              handleBackFromResetPasswordToPassword
            }
            handleClose={handleClose}
            resetPasswordPage={resetPasswordPage}
            phoneData={phoneData}
          />
        )}

        {/* OTP */}
        {OTPPage && (
          <HeaderOTP
            handleBackFromOTPToResetPassword={handleBackFromOTPToResetPassword}
            handleClose={handleClose}
            OTPPage={OTPPage}
          />
        )}

        {/* Signup page */}
        {signupPage && (
          <HeaderSignup
            handleBackFromSignupToLogin={handleBackFromSignupToLogin}
            handleClose={handleClose}
            signupPage={signupPage}
            phone={phone}
          />
        )}

        <DialogContent>
          <DialogContentText></DialogContentText>
          {/* Login field */}
          {loginPage && (
            <BodyLogin
              checkPhoneValid={checkPhoneValid}
              phoneValidMessage={phoneValidMessage}
              handleChange={handleChange}
            />
          )}
          {/* Password field */}
          {passwordPage && (
            <BodyPassword
              showPassword={showPassword}
              handleChangePassword={handleChangePassword}
              handleClickShowPassword={handleClickShowPassword}
              handleMouseDownPassword={handleMouseDownPassword}
              handleForgetPasswordButton={handleForgetPasswordButton}
            />
          )}

          {/* ResetPassword */}

          {/* NewPassword field */}
          {resetPasswordPage && (
            <BodyResetPassword
              showPassword={showPassword}
              newPassword={newPassword}
              handleChangeNewPassword={handleChangeNewPassword}
              handleClickShowPassword={handleClickShowPassword}
              handleMouseDownPassword={handleMouseDownPassword}
              reEnterNewPassword={reEnterNewPassword}
              handleChangeReEnterNewPassword={handleChangeReEnterNewPassword}
            />
          )}

          {/* OTP field */}
          {OTPPage && <BodyOTP OTP={OTP} setOTP={setOTP} />}

          {/* Signup  form */}
          {signupPage && (
            <BodySignup
              error={error}
              handleInput={handleInput}
              showPassword={showPassword}
              handleClickShowPassword={handleClickShowPassword}
              handleMouseDownPassword={handleMouseDownPassword}
            />
          )}
        </DialogContent>
        <DialogActions>
          {/* Continue button */}
          {loginPage && (
            <FooterLogin
              showButton={showButton}
              handleContinueButton={handleContinueButton}
            />
          )}
          {/* Login button */}
          {passwordPage && (
            <FooterPassword
              showLoginButton={showLoginButton}
              handleLoginButton={handleLoginButton}
            />
          )}

          {/* Reset password button */}

          {resetPasswordPage && (
            <FooterResetPassword
              showResetPasswordButton={showResetPasswordButton}
              handleResetPasswordButton={handleResetPasswordButton}
            />
          )}

          {/* OTP Auth button */}

          {OTPPage && (
            <FooterOTP
              showAuthButton={showAuthButton}
              handleClickAuthButton={handleClickAuthButton}
            />
          )}

          {/* Signup button */}

          {signupPage && (
            <FooterSignup
              showSignupButton={showSignupButton}
              handleClickSignupButton={handleClickSignupButton}
            />
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}
