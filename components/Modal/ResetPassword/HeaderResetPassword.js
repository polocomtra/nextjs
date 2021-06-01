import DialogTitle from "@material-ui/core/DialogTitle";

import { styleFlex } from "../style";

const HeaderResetPassword = ({
  handleBackFromResetPasswordToPassword,
  handleClose,
  resetPasswordPage,
  phoneData,
}) => {
  return (
    <DialogTitle id="form-dialog-title">
      <div style={styleFlex}>
        <span onClick={handleBackFromResetPasswordToPassword}>
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
  );
};

export default HeaderResetPassword;
