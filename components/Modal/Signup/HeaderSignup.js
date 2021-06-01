import DialogTitle from "@material-ui/core/DialogTitle";

import { styleFlex } from "../style";

const HeaderSignup = ({
  handleBackFromSignupToLogin,
  handleClose,
  signupPage,
  phone,
}) => {
  return (
    <DialogTitle id="form-dialog-title">
      <div style={styleFlex}>
        <span onClick={handleBackFromSignupToLogin}>
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
  );
};

export default HeaderSignup;
