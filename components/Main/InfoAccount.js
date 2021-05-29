const InfoAccount = () => {
  return (
    <div className="row mt-4 mb-3">
      <div className="col-md-4 col-lg-3">
        <div className="d-flex">
          <img
            src="https://meete.co/img/icons/avatar_holder.png"
            alt="avatar"
            className="mr-3 styles-avatar"
          />
          <div className="account-info">
            <p>Tài khoản của</p>
            <p style={{ fontSize: "18px" }}>Nguyễn Tiến Tài</p>
          </div>
        </div>
      </div>
      <div className="col-md-8 col-lg-9">
        <div
          className="d-flex align-items-center justify-content-between"
          style={{ height: "100%" }}
        >
          <div className="style-title">Giỏ hàng</div>
        </div>
      </div>
    </div>
  );
};

export default InfoAccount;
