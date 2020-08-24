import React, { useState, useEffect, useCallback } from "react";
import "./index.scss";
import { cinemaService } from "../../services/quanLyRapService";
import CumRap from "./CumRap";
import { Row, Col } from "antd";

const HeThongPhongVe = () => {
  const [heThongRapChieu, setHeThongRapChieu] = useState([]);
  const [maHeThongRap, setMaHeThongRap] = useState("BHDStar");
  const [heThongCumRap, setHeThongCumRap] = useState([]);

  let initialFetch = useCallback(() => {
    cinemaService
      .layThongTinHeThongRap()
      .then((res) => {
        setHeThongRapChieu(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    initialFetch();
  }, [initialFetch]);

  let fetchCumRap = useCallback(() => {
    cinemaService
      .layThongTinLichChieuHeThongRap(maHeThongRap)
      .then((res) => setHeThongCumRap(res.data[0].lstCumRap))
      .catch((err) => console.log(err));
  }, [maHeThongRap]);

  useEffect(() => {
    fetchCumRap();
  }, [fetchCumRap]);

  const renderHeThongRap = () => {
    if (heThongRapChieu && heThongRapChieu.length > 0) {
      return heThongRapChieu.map((heThongRap, index) => (
        <div
          className={
            heThongRap.maHeThongRap === maHeThongRap
              ? "ten_he_thong_rap active"
              : "ten_he_thong_rap"
          }
          key={index}
          onClick={() => setMaHeThongRap(heThongRap.maHeThongRap)}
        >
          <img src={heThongRap.logo} alt="/" />
          <span className="ten_rap">{heThongRap.tenHeThongRap}</span>
        </div>
      ));
    }
  };
  return (
    <section className="hethongrap_component">
      <div className="overlay">
        <div className="content_box">
          <div className="hethongrap">
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col span={5}>{renderHeThongRap()}</Col>
              <Col span={19}>
                <CumRap heThongCumRap={heThongCumRap} />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeThongPhongVe;
