import Button from "@material-ui/core/Button";

const FooterResetPassword = ({
  showResetPasswordButton,
  handleResetPasswordButton,
}) => {
  return (
    <Button
      variant="contained"
      color="secondary"
      fullWidth
      disabled={showResetPasswordButton}
      onClick={handleResetPasswordButton}
    >
      Đổi mật khẩu
    </Button>
  );
};

export default FooterResetPassword;
