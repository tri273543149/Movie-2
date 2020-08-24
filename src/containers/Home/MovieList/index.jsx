import React from "react";
import "./index.scss";
import { useSelector } from "react-redux";
import { Row, Col } from "antd";
import MovieItem from "../../../components/MovieItem";

const MovieList = () => {
  const movieList = useSelector((state) => state.movie.movieList);
  const renderMovieItem = () => {
    if (movieList && movieList.length > 0) {
      return movieList.map((movie, index) => (
        <Col key={index}>
          <MovieItem movie={movie} index={index + 1} />
        </Col>
      ));
    }
  };
  return (
    <section className="movie_list">
      <div className="content_box">
        <div className="search_content">
          <div className="search_box">
            <input type="text" placeholder="Tên phim" />
            <select>
              <option>Rạp</option>
            </select>
            <select>
              <option>Ngày xem</option>
            </select>
            <select>
              <option>Suất chiếu</option>
            </select>
            <button>Mua vé ngay</button>
          </div>
        </div>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {renderMovieItem()}
        </Row>
      </div>
    </section>
  );
};

export default MovieList;
