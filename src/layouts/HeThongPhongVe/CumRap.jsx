import React from "react";
import { Row, Col } from "antd";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const CumRap = ({ heThongCumRap }) => {
  const renderCumRap = () => {
    if (heThongCumRap && heThongCumRap.length > 0) {
      return heThongCumRap.map((cumRap, index) => (
        <div className="hethongcumrap" key={index}>
          <div className="ten_cum_rap">
            <p className="name">{cumRap.tenCumRap}</p>
            <p className="diachi">{cumRap.diaChi}</p>
          </div>
          {renderDanhSachPhim(cumRap.danhSachPhim)};
        </div>
      ));
    }
  };
  const renderDanhSachPhim = (danhSachPhim) => {
    if (danhSachPhim && danhSachPhim.length > 0) {
      return danhSachPhim.map((phim, index) => (
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} key={index} className="row_1">
          <Col span={5}>
            <div className="item_phim">
              <img src={phim.hinhAnh} alt="/" />
              <div className="ten_phim">
                <span>{phim.tenPhim}</span>
              </div>
            </div>
          </Col>
          <Col span={19}>
            <div className="lichchieu_item">
              {renderLichChieuTheoPhim(phim.lstLichChieuTheoPhim)}
            </div>
          </Col>
        </Row>
      ));
    }
  };
  const renderLichChieuTheoPhim = (lstLichChieuTheoPhim) => {
    if (lstLichChieuTheoPhim && lstLichChieuTheoPhim.length > 0) {
      return lstLichChieuTheoPhim.map((lichChieu, index) => (
        <Link to={`/show-time/${lichChieu.maLichChieu}`} key={index}>
          <div className="item_lich_chieu">
            <Moment format="HH:mm">
              {lichChieu.ngayChieuGioChieu}
            </Moment>{" "}
            - {lichChieu.tenRap}
          </div>
        </Link>
      ));
    }
  };

  return <div className="cum_rap">{renderCumRap()}</div>;
};

export default CumRap;
