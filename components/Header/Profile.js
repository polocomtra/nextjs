import { useState } from "react";
import LoginModal from "../Modal/LoginModal";

const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  const [clicked, setClicked] = useState(true);
  const [user, setUser] = useState("Đăng nhập");
  const handleClick = () => {
    setShowModal(!showModal);
  };

  const handleCloseModal = (showModalFromProps) => {
    setShowModal(showModalFromProps);
  };

  const handleSuccessLogin = (userFromProps) => {
    setUser(userFromProps);
    setClicked(false);
  };
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
        <li
          className="dropdown header-navItem-1 col-5"
          onClick={clicked ? handleClick : null}
        >
          <span className>
            <span className="nav-link header-textWrap-1">{user}</span>
          </span>
        </li>
        <li className="col-1" />
      </ul>
      {showModal && (
        <LoginModal
          showModal={handleCloseModal}
          handleSuccessLogin={handleSuccessLogin}
        />
      )}
    </div>
  );
};

export default Profile;
