import Button from "@material-ui/core/Button";

const FooterPassword = ({ showLoginButton, handleLoginButton }) => {
  return (
    <Button
      variant="contained"
      color="secondary"
      fullWidth
      disabled={showLoginButton}
      onClick={handleLoginButton}
    >
      Đăng nhập
    </Button>
  );
};

export default FooterPassword;
