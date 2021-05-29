const Item = ({ item }) => {
  const { img, voucher, place, status } = item;
  return (
    <a href="/" className="w-100" style={{ textDecoration: "none" }}>
      <div className="bg-white rounded my-2 style-container">
        <div className="style-top-info">
          <img
            src={img}
            alt="meete"
            className="style-avatar mr-3 my-2 rounded"
          />
          <div className="style-content m-3">
            <div className="d-flex align-items-center my-1 style-special ">
              <p className="none-underline">{voucher}</p>
            </div>
            <div className="d-flex align-items-center my-1 style-text ">
              <p className="none-underline">{place}</p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center style-expireDate">
          "Ngày đặt hàng" "26/05/2021 - 16:00"
        </div>
        <div
          className={
            status
              ? "style-success style-status-success"
              : "style-status style-statusPending"
          }
        >
          {status ? "Đã dùng" : "Chưa dùng"}
        </div>
      </div>
    </a>
  );
};

export default Item;
