import React, { useState, useEffect, useCallback } from "react";
import "./index.scss";
import { userService } from "../../../services/quanLyNguoiDungService";
import { Tabs } from "antd";
import { useSelector } from "react-redux";
import ThongTinDatVe from "./ThongTinDatVe";
import ThongTinNguoiDung from "./ThongTinNguoiDung";
import { Redirect } from "react-router-dom";

const { TabPane } = Tabs;

const Profile = ({ match }) => {
  const credentials = useSelector(state => state.user.credentials);

  const [thongTinNguoiDung, setThongTinNguoiDung] = useState({});

  let { taiKhoan } = match.params;
  const initialFetch = useCallback(() => {
    userService
      .layThongTinTaiKhoan(taiKhoan)
      .then((res) => setThongTinNguoiDung(res.data))
      .catch((err) => console.log(err));
  }, [taiKhoan]);

  useEffect(() => {
    initialFetch();
  }, [initialFetch]);


  if(!credentials){
    return <Redirect to="/" />
  }

  const tabArray = [
    <>
      <i className="fa fa-ticket-alt"></i>
      <span className="tab_name">Thông tin đặt vé</span>
    </>,
    <>
      <i className="fa fa-user-cog"></i>
      <span className="tab_name">Cập nhật thông tin</span>
    </>,
  ];

  let thongTinDatVe = thongTinNguoiDung?.thongTinDatVe || {
    ngayDat: "",
    tenPhim: "",
    thoiLuongPhim: "",
    danhSachGhe: [],
  };
  let thongTinND = thongTinNguoiDung || {
    email: "",
    hoTen: "",
    matKhau: "",
    soDt: "",
  };
  return (
    <section className="profile">
      <div className="content_box">
        <div className="tab_content">
          <Tabs defaultActiveKey="0" tabPosition={"left"}>
            {tabArray.map((tab, index) => (
              <TabPane tab={tab} key={index}>
                {index === 0 ? (
                  <ThongTinDatVe thongTinDatVe={thongTinDatVe} />
                ) : (
                  <ThongTinNguoiDung
                    thongTinND={thongTinND}
                    taiKhoan={taiKhoan}
                  />
                )}
              </TabPane>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Profile;
