import React from "react";
import Moment from "react-moment";

const ThongTinDatVe = ({ thongTinDatVe }) => {
  const renderDanhSachGhe = (danhSachGhe) => {
    return danhSachGhe.map((ghe, index) => (
      <div className="item_ghe" key={index}>
        Tên rạp: {ghe.tenHeThongRap} - Số rạp: {ghe.tenRap} - Số ghế:{" "}
        {ghe.tenGhe}
      </div>
    ));
  };

  const renderThongTinDatVe = () => {
    if (thongTinDatVe && thongTinDatVe.length > 0) {
      return thongTinDatVe.map((item, index) => (
        <div className="item_movie" key={index}>
          <div className="movie_info">
            {item.tenPhim} - Thời lượng: {item.thoiLuongPhim} phút - Thời
            gian đặt vé:{" "}
            <Moment format="DD/MM/YYYY HH:mm">{item.ngayDat}</Moment>
          </div>
          {renderDanhSachGhe(item.danhSachGhe)}
        </div>
      ));
    }
  };
  return <div className="thong_tin_dat_ve">{renderThongTinDatVe()}</div>;
};

export default ThongTinDatVe;
