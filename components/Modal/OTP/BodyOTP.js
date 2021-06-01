import TextField from "@material-ui/core/TextField";

const BodyOTP = ({ OTP, setOTP }) => {
  return (
    <TextField
      autoFocus
      margin="dense"
      id="OTP"
      label="Nhập mã OTP"
      type="text"
      value={OTP}
      fullWidth
      onChange={(e) => setOTP(e.target.value)}
    />
  );
};

export default BodyOTP;
