import DialogTitle from "@material-ui/core/DialogTitle";

import { styleFlex } from "../style";

const HeaderOTP = ({
  handleBackFromOTPToResetPassword,
  handleClose,
  OTPPage,
}) => {
  return (
    <DialogTitle id="form-dialog-title">
      <div style={styleFlex}>
        <span onClick={handleBackFromOTPToResetPassword}>
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
  );
};

export default HeaderOTP;
