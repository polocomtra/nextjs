import Button from "@material-ui/core/Button";

const FooterSignup = ({ showSignupButton, handleClickSignupButton }) => {
  return (
    <Button
      variant="contained"
      color="secondary"
      fullWidth
      disabled={showSignupButton}
      onClick={handleClickSignupButton}
    >
      Đăng kí
    </Button>
  );
};

export default FooterSignup;
