import React, { useState, useEffect, useCallback } from "react";
import "./index.scss";
import { movieService } from "../../../services/quanLyPhimService";
import { NavLink } from "react-router-dom";
import { Row, Col, Progress, Tabs, Rate } from "antd";
import Moment from "react-moment";

const { TabPane } = Tabs;

const dateArray = [
  {
    thu: "Thứ 2",
    ngay: "23",
  },
  {
    thu: "Thứ 3",
    ngay: "24",
  },
  {
    thu: "Thứ 4",
    ngay: "25",
  },
  {
    thu: "Thứ 5",
    ngay: "26",
  },
  {
    thu: "Thứ 6",
    ngay: "27",
  },
  {
    thu: "Thứ 7",
    ngay: "28",
  },
  {
    thu: "Chủ nhật",
    ngay: "29",
  },
];

const MovieDetail = ({ match }) => {
  let { maPhim } = match.params;
  let [phim, setPhim] = useState({});

  const initialFetch = useCallback(() => {
    movieService
      .layThongTinPhim(maPhim)
      .then((res) => setPhim(res.data))
      .catch((err) => console.log(err));
  }, [maPhim]);

  useEffect(() => {
    initialFetch();
  }, [initialFetch]);

  let {
    tenPhim,
    hinhAnh,
    moTa,
    ngayKhoiChieu,
    danhGia,
    heThongRapChieu,
  } = phim;
  return (
    <section className="movie_detail">
      <div className="content_box">
        <div className="top_content">
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col>
              <div className="img_box">
                <img src={hinhAnh} alt="/" />
              </div>
            </Col>
            <Col>
              <div className="content">
                <p className="ngay_khoi_chieu">
                  <Moment format="DD/MM/YYYY">{ngayKhoiChieu}</Moment>
                </p>
                <p className="ten_phim">{tenPhim}</p>
                <p className="chi_tiet_phim">105 phút - 0 IMDb - 2D/Digital</p>
                <p className="text">
                  <span>Đạo diễn: </span>
                  Andrew Mecham, Matthew Whedon
                </p>
                <p className="text">
                  <span>Thể loại: </span>
                  Hành động - Hài hước
                </p>
                <p className="text">
                  <span>Ngôn ngữ: </span>
                  Tiếng Anh - Phụ đề Tiếng Việt
                </p>
                <p className="text">
                  <span>Giới thiệu: </span>
                  {moTa}
                </p>
                <div className="button_box">
                  <button className="age_limit">C18</button>
                  <button className="play_trailer">Trailer</button>
                  <button className="buy_ticket">Mua vé</button>
                </div>
              </div>
            </Col>
            <Col>
              <div className="rating_box">
                <Progress type="circle" percent={danhGia * 10} width={120} />
                <div>
                  <Rate value={danhGia / 2} />
                </div>
                <p>20 lượt đánh giá</p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="he_thong_rap">
          <Tabs defaultActiveKey="1" tabPosition={"left"}>
            {heThongRapChieu?.map((heThongRap, index) => (
              <TabPane
                tab={
                  <div className="ten_he_thong_rap">
                    <img src={heThongRap.logo} alt="/" />
                    <span>{heThongRap.tenHeThongRap}</span>
                  </div>
                }
                key={index}
              >
                <div className="ngay_trong_tuan">
                  {dateArray.map((ngay, index) => (
                    <div className={`ngay_item key_${index}`} key={index}>
                      <p>{ngay.thu}</p>
                      <p className="p_2">{ngay.ngay}</p>
                    </div>
                  ))}
                </div>
                {heThongRap.cumRapChieu?.map((cumRap, index) => {
                  return (
                    <div className="cum_rap" key={cumRap.maCumRap}>
                      <p className="ten_cum_rap">{cumRap.tenCumRap}</p>
                      <p className="dia_chi">
                        216 Võ Văn Ngân, Bình Thọ, Thủ Đức, Thành phố Hồ Chí
                        Minh
                      </p>
                      <div className="lich_chieu_phim">
                        {cumRap.lichChieuPhim
                          ?.slice(0, 12)
                          .map((lichChieu, index) => {
                            return (
                              <NavLink
                                className="gio_chieu"
                                key={index}
                                to={`/show-time/${lichChieu.maLichChieu}`}
                              >
                                <Moment format="HH:mm">
                                  {lichChieu.ngayChieuGioChieu}
                                </Moment>
                                <span>- {lichChieu.tenRap}</span>
                              </NavLink>
                            );
                          })}
                      </div>
                    </div>
                  );
                })}
              </TabPane>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default MovieDetail;
