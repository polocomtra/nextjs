const NavAccount = () => {
  return (
    <div className="col-md-4 col-lg-3">
      <div>
        <div className="style-tab d-flex align-items-center p-2">
          <div className="mr-3 d-flex align-items-center">
            <img src="/img/information.svg" style={{ width: "20px" }} />
          </div>
          <p style={{ marginBottom: "0px" }} className="left-align">
            Thông tin tài khoản
          </p>
        </div>
        <div className="style-tab d-flex align-items-center p-2">
          <div className="mr-3 d-flex align-items-center">
            <img src="/img/shopping-cart.svg" style={{ width: "20px" }} />
          </div>
          <p className="left-align" style={{ marginBottom: "0px" }}>
            Giỏ hàng
          </p>
        </div>
        <div className="style-tab d-flex align-items-center p-2">
          <div className="mr-3 d-flex align-items-center">
            <img src="/img/gallery.svg" style={{ width: "20px" }} />
          </div>
          <p className="left-align" style={{ marginBottom: "0px" }}>
            Bộ sưu tập cá nhân
          </p>
        </div>
        <div className="style-tab d-flex align-items-center p-2">
          <div className="mr-3 d-flex align-items-center">
            <img src="/img/wallet.svg" style={{ width: "20px" }} />
          </div>
          <p className="left-align" style={{ marginBottom: "0px" }}>
            Ví của tôi
          </p>
        </div>
        <div className="style-tab d-flex align-items-center p-2">
          <div className="mr-3 d-flex align-items-center">
            <img src="/img/gift-box.svg" style={{ width: "20px" }} />
          </div>
          <p className="left-align" style={{ marginBottom: "0px" }}>
            Đổi quà tặng
          </p>
        </div>
        <div className="style-tab d-flex align-items-center p-2">
          <div className="mr-3 d-flex align-items-center">
            <img
              src="https://meete.co/img/icons/key.svg"
              style={{ width: "20px" }}
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
