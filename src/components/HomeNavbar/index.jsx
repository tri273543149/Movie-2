import React from "react";
import "./index.scss";
import LogoImage from "../../images/logocybersoft.png";
import { NavLink, Link } from "react-router-dom";
import SignUp from "../SignUp";
import SignIn from "../SignIn";
import { useSelector, useDispatch } from "react-redux";
import UserImage from "./user.png";
import { logout } from "../../store/actions/quanLyNguoiDungAction";

const HomeNavbar = () => {
  const dispatch = useDispatch();
  const credentials = useSelector((state) => state.user.credentials);

  const handleLogOut = () => {
    dispatch(logout());
  }

  const renderOnSignIn = () => {
    let { taiKhoan } = credentials;
    return (
      <>
        <Link to={`/profile/${taiKhoan}`}>
          <img src={UserImage} alt="/" />
          <span className="span_item">
            {credentials ? credentials.hoTen : ""}
          </span>
        </Link>
        <i
          className="fa fa-power-off icon_logout"
          onClick={handleLogOut}
        ></i>
      </>
    );
  };
  return (
    <header>
      <div className="header_content">
        <div className="logo_content">
          <img src={LogoImage} alt="/" />
        </div>
        <nav>
          <ul>
            <li>
              <NavLink activeClassName="active" exact to="/">
                Trang chủ
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/movie-list">
                Danh sách phim
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/about">
                Thông tin
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/events">
                Sự kiện
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="login_content">
          {credentials ? (
            renderOnSignIn()
          ) : (
            <>
              <SignUp />
              <SignIn />
            </>
          )}

          <select>
            <option>Hồ Chí Minh</option>
            <option>Hà Nội</option>
            <option>Đà Nẵng</option>
            <option>Vũng Tàu</option>
            <option>Cần Thơ</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default HomeNavbar;
