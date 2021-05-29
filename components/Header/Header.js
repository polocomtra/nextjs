import Brand from "./Brand";
import Profile from "./Profile";

const Header = ({showLocationPopup,location}) => {
  return (
    <header>
      <nav className="navbar navbar-light bg-white header main-header-1">
        <div className="container-fluid">
          <div className="row flex-grow-1 undefined">
            <Brand locationFromProps={location} showLocationPopup={showLocationPopup} />
            <Profile />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
