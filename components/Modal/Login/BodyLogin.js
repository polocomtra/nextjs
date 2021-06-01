import TextField from "@material-ui/core/TextField";

const BodyLogin = ({ checkPhoneValid, phoneValidMessage, handleChange }) => {
  return (
    <div>
      {checkPhoneValid && (
        <small style={{ fontSize: ".5rem", color: "red" }}>
          {phoneValidMessage}
        </small>
      )}
      <TextField
        autoFocus
        margin="dense"
        id="phone"
        label="Nhập số điện thoại"
        type="text"
        fullWidth
        onChange={handleChange}
      />
    </div>
  );
};

export default BodyLogin;
