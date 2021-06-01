import Button from "@material-ui/core/Button";

const FooterLogin = ({ showButton, handleContinueButton }) => {
  return (
    <Button
      variant="contained"
      color="secondary"
      fullWidth
      disabled={showButton}
      onClick={handleContinueButton}
    >
      Đăng nhập
    </Button>
  );
};

export default FooterLogin;
