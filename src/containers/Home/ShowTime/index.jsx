import React, { useState, useEffect, Fragment, useCallback } from "react";
import "./index.scss";
import { Row, Col } from "antd";
import { tichketService } from "../../../services/quanLyDatVeService";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Swal from "sweetalert2";

const ShowTime = ({ match }) => {
  const credentials = useSelector((state) => state.user.credentials);
  const { maLichChieu } = match.params;
  let [thongTinPhongVe, setThongTinPhongVe] = useState({});
  let [danhSachGheDangDat, setDanhSachGheDangDat] = useState([]);

  const initialFetch = useCallback(() => {
    tichketService
      .layDanhSachPhongVe(maLichChieu)
      .then((res) => {
        setThongTinPhongVe(res.data);
      })
      .catch((err) => console.log(err.response.data));
  }, [maLichChieu]);

  useEffect(() => {
    initialFetch();
  }, [initialFetch]);

  if (!localStorage.getItem("credentials")) {
    Swal.fire({
      icon: "error",
      title: "Vui lòng đăng nhập!",
    });
    return <Redirect to="/" />;
  }

  const renderDayGhe = (index) => {
    switch (index) {
      case 0:
        return <button className="day_ghe">A</button>;
      case 16:
        return <button className="day_ghe">B</button>;
      case 32:
        return <button className="day_ghe">C</button>;
      case 48:
        return <button className="day_ghe">D</button>;
      case 64:
        return <button className="day_ghe">E</button>;
      case 80:
        return <button className="day_ghe">F</button>;
      case 96:
        return <button className="day_ghe">G</button>;
      case 112:
        return <button className="day_ghe">H</button>;
      case 128:
        return <button className="day_ghe">I</button>;
      case 144:
        return <button className="day_ghe">K</button>;
      case 160:
        return <button className="day_ghe">L</button>;
      default:
        break;
    }
  };
  const renderGhe = (daDat, ghe, i) => {
    if (daDat) {
      return (
        <button className={"ghe gheDaDat"} disabled>
          {(i % 16) + 1}
        </button>
      );
    } else {
      let cssGheDangDat = "";
      let index = danhSachGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.stt === ghe.stt
      );

      if (index !== -1) {
        cssGheDangDat = "gheDangDat";
      }
      let cssGheVip = "";
      if (ghe.loaiGhe === "Vip") {
        cssGheVip = "gheVip";
      }
      return (
        <button
          onClick={() => datGhe(ghe)}
          className={`ghe ${cssGheVip} ${cssGheDangDat}`}
        >
          {(i % 16) + 1}
        </button>
      );
    }
  };
  const renderDanhSachGhe = () => {
    let { danhSachGhe } = thongTinPhongVe;
    return danhSachGhe?.map((ghe, index) => (
      <Fragment key={index}>
        {renderDayGhe(index)}
        {renderGhe(ghe.daDat, ghe, index)}
        {(index + 1) % 16 === 0 ? <br /> : ""}
      </Fragment>
    ));
  };
  const datGhe = (ghe) => {
    let index = danhSachGheDangDat.findIndex(
      (gheDangDat) => gheDangDat.stt === ghe.stt
    );
    if (index !== -1) {
      danhSachGheDangDat.splice(index, 1);
    } else {
      danhSachGheDangDat = [...danhSachGheDangDat, ghe];
    }
    setDanhSachGheDangDat([...danhSachGheDangDat]);
  };

  const renderThongTinGhe = () => {
    return danhSachGheDangDat.map((item, index) => (
      <div className="ghe_item" key={index}>
        <span>{item.loaiGhe === "Thuong" ? "NORx1: " : "VIPx1: "}</span>
        <span>{item.giaVe.toLocaleString()}VND</span>
      </div>
    ));
  };

  const datVe = () => {
    if (danhSachGheDangDat.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Chưa chọn ghế!",
      });
      return;
    }
    const { taiKhoan } = credentials;
    let thongTinDatVe = {
      maLichChieu,
      danhSachVe: danhSachGheDangDat,
      taiKhoanNguoiDung: taiKhoan,
    };
    tichketService
      .datVe(thongTinDatVe)
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Thanh toán thành công",
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Đặt vé thất bại",
        });
      });
  };
  let { thongTinPhim } = thongTinPhongVe;
  return (
    <div className="show_time">
      <div className="hoverlay">
        <div className="content_box">
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={16}>
              <div className="screen_box">Màn hình</div>
              {renderDanhSachGhe()}
            </Col>
            <Col span={8}>
              <div className="movie_info">
                <div className="item_full">Thông tin chi tiết</div>
                <div className="item">Tên phim</div>
                <div className="item_right">{thongTinPhim?.tenPhim}</div>
                <div className="item_full"></div>
                <div className="item">Ngày chiếu</div>
                <div className="item_right">{thongTinPhim?.ngayChieu}</div>
                <div className="item">Giờ chiếu</div>
                <div className="item_right">{thongTinPhim?.gioChieu}</div>
                <div className="item_full"></div>
                <div className="item">Cụm rạp</div>
                <div className="item_right">{thongTinPhim?.tenCumRap}</div>
                <div className="item">Địa chỉ</div>
                <div className="item_right">{thongTinPhim?.diaChi}</div>
                <div className="item">Rạp</div>
                <div className="item_right">{thongTinPhim?.tenRap}</div>
                <div className="item_full"></div>
                <div className="item">Loại ghế</div>
                <div className="item_right_1">{renderThongTinGhe()}</div>
                <div className="item_full"></div>
                <div className="item">Ưu đãi</div>
                <div className="item_right">0%</div>
                <div className="item_full"></div>
                <div className="item">Tổng tiền</div>
                <div className="item_right">
                  <span className="total_money">
                    {danhSachGheDangDat
                      .reduce((tongTien, gheDangDat) => {
                        return (tongTien += gheDangDat.giaVe);
                      }, 0)
                      .toLocaleString()}{" "}
                    VND
                  </span>
                </div>
                <div className="button_box">
                  <button onClick={datVe}>Đặt vé</button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default ShowTime;
