import React from "react";
import "./index.scss";
import { Card } from "antd";
import { Link } from "react-router-dom";
import ReactResponsiveModal from "../ReactResponsiveModal";

const MovieItem = ({ movie }) => {
  let { hinhAnh, maPhim, trailer } = movie;
  return (
    <section className="movie_item">
      <div className="hover_lay">
        <div className="hover_box">
          <ReactResponsiveModal trailer={trailer} />
          <Link to={`/movie-detail/${maPhim}`}>Xem chi tiết</Link>
          <Link to="/muave">Mua vé</Link>
        </div>
      </div>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="/" src={hinhAnh} />}
      ></Card>
    </section>
  );
};

export default MovieItem;
