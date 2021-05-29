const NavAccount = () => {
  return (
    <div className="col-md-4 col-lg-3">
      <div>
        <div className="style-tab d-flex align-items-center p-2">
          <div className="mr-3 d-flex align-items-center">
            <i
              className="fa fa-info-circle"
              style={{ height: "16px", width: "16px" }}
              aria-hidden="true"
            />
          </div>
          <p style={{ marginBottom: "0px" }} className="left-align">
            Thông tin tài khoản
          </p>
        </div>
        <div className="style-tab d-flex align-items-center p-2">
          <div className="mr-3 d-flex align-items-center">
            <i
              className="fa fa-cart-plus"
              style={{ height: "16px", width: "16px" }}
              aria-hidden="true"
            />
          </div>
          <p className="left-align" style={{ marginBottom: "0px" }}>
            Giỏ hàng
          </p>
        </div>
        <div className="style-tab d-flex align-items-center p-2">
          <div className="mr-3 d-flex align-items-center">
            <i
              className="fa fa-picture-o"
              style={{ height: "16px", width: "16px" }}
              aria-hidden="true"
            />
          </div>
          <p className="left-align" style={{ marginBottom: "0px" }}>
            Bộ sưu tập cá nhân
          </p>
        </div>
        <div className="style-tab d-flex align-items-center p-2">
          <div className="mr-3 d-flex align-items-center">
            <i
              className="fa fa-wallet"
              style={{ height: "16px", width: "16px" }}
              aria-hidden="true"
            />
          </div>
          <p className="left-align" style={{ marginBottom: "0px" }}>
            Ví của tôi
          </p>
        </div>
        <div className="style-tab d-flex align-items-center p-2">
          <div className="mr-3 d-flex align-items-center">
            <i
              className="fa fa-gift"
              style={{ height: "16px", width: "16px" }}
              aria-hidden="true"
            />
          </div>
          <p className="left-align" style={{ marginBottom: "0px" }}>
            Đổi quà tặng
          </p>
        </div>
        <div className="style-tab d-flex align-items-center p-2">
          <div className="mr-3 d-flex align-items-center">
            <i
              className="fa fa-key"
              style={{ height: "16px", width: "16px" }}
              aria-hidden="true"
            />
          </div>
          <p className="left-align" style={{ marginBottom: "0px" }}>
            Đổi mật khẩu
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavAccount;
