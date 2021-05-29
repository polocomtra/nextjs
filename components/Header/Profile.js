const Profile = () => {
  return (
    <div className="col-12 col-sm-4 col-md-4 header-col-1">
      <ul
        className="
            nav nav-pills nav-justified
            col-12
            justify-content-end
            header-nav-1
          "
      >
        <li className="header-navItem-1 col-4" style={{ position: "relative" }}>
          <div className="header-iconGroup-1">
            <a className="header-iconWrap-1" href="/gio-hang">
              <img
                className="header-icon-1"
                src="https://meete.co/img/icons/icon_cart.svg"
                alt="Giỏ hàng"
              />
            </a>
            <a className="header-iconWrap-1" href="/thong-bao">
              <img
                className="header-icon-1"
                src="https://meete.co/img/icons/icon_notification.svg"
                alt="Thông báo"
              />
            </a>
          </div>
        </li>
        <li className="dropdown header-navItem-1 col-5">
          <span className>
            <span className="nav-link header-textWrap-1">Nguyễn Tiến Tài</span>
          </span>
        </li>
        <li className="col-1" />
      </ul>
    </div>
  );
};

export default Profile;
