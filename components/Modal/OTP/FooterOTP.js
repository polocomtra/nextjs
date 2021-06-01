import Button from "@material-ui/core/Button";

const FooterOTP = ({ showAuthButton, handleClickAuthButton }) => {
  return (
    <Button
      variant="contained"
      color="secondary"
      fullWidth
      disabled={showAuthButton}
      onClick={handleClickAuthButton}
    >
      Xác thực
    </Button>
  );
};

export default FooterOTP;
