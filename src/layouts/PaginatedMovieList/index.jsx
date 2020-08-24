import React, { useState, useEffect } from "react";
import "./index.scss";
import { movieService } from "../../services/quanLyPhimService";
import MovieItem from "../../components/MovieItem";
import { Tabs, Row, Col, Pagination } from "antd";
import { soPhanTuTrenTrang } from "../../config/setting";

const { TabPane } = Tabs;

const PaginatedMovieList = () => {
  const [page, setPage] = useState(1);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    movieService
      .layDanhSachPhimPhanTrang(page)
      .then((res) => setMovieList(res.data))
      .catch((err) => console.log(err));
  }, [page]);
  let totalCount;
  if (movieList) {
    totalCount = movieList.totalCount;
  }

  const renderMovieItem = () => {
    if (movieList) {
      if (movieList.items && movieList.items.length > 0) {
        return movieList.items.map((movie, index) => (
          <Col key={index}>
            <MovieItem movie={movie} index={index + 1} />
          </Col>
        ));
      }
    }
  };
  const renderMovieItemReverse = () => {
    if (movieList) {
      if (movieList.items && movieList.items.length > 0) {
        let reverseArray = movieList.items.reverse();
        return reverseArray.map((movie, index) => (
          <Col key={index}>
            <MovieItem movie={movie} index={index + 1} />
          </Col>
        ));
      }
    }
  };
  return (
    <section className="paginated_movielist">
      <div className="content_box">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Đang chiếu" key="1">
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify={"center"}>
              {renderMovieItem()}
            </Row>
          </TabPane>
          <TabPane tab="Sắp chiếu" key="2">
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify={"center"}>
              {renderMovieItemReverse()}
            </Row>
          </TabPane>
        </Tabs>
      </div>
      <div className="show_pagination">
        <Pagination
          defaultCurrent={1}
          current={page}
          pageSize={soPhanTuTrenTrang}
          total={totalCount ? totalCount : 0}
          onChange={(page) => setPage(page)}
        />
      </div>
    </section>
  );
};

export default PaginatedMovieList;
