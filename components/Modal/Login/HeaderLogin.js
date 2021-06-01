import DialogTitle from "@material-ui/core/DialogTitle";

import { styleFlex } from "../style";

const HeaderLogin = ({
  passwordPage,
  loginPage,
  handleBackFromPasswordToLogin,
  handleClose,
  phoneData,
}) => {
  return (
    <DialogTitle id="form-dialog-title">
      <div style={styleFlex}>
        {passwordPage && (
          <span onClick={handleBackFromPasswordToLogin}>
            <img
              src="/img/left-arrow.svg"
              style={{
                width: "24px",
                height: "24px",
                paddingRight: "10px",
              }}
            ></img>
          </span>
        )}
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
          <small style={{ fontSize: ".65rem" }}>Săn ưu đãi khủng nào!!!</small>
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
  );
};

export default HeaderLogin;
