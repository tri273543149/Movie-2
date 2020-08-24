import React from "react";
import "./index.scss";
import { Carousel } from "antd";
import { sliderData } from "../../config/slider";
import ReactResponsiveModal from "../../components/ReactResponsiveModal";

const Slider = () => {
  const renderSliderItem = () => {
    if (sliderData && sliderData.length > 0) {
      return sliderData.map((item, index) => (
        <div className="item" key={index}>
          <div className="play_box">
            <div className="hoverlay">
              <ReactResponsiveModal trailer={item.trailer} />
            </div>
          </div>
          <img src={item.image} alt="/" />
        </div>
      ));
    }
  };
  return (
    <section className="slider_component">
      <Carousel autoplay={true}>{renderSliderItem()}</Carousel>
      <div className="search_content">
        <div className="search_box">
          <select>
            <option>Phim</option>
          </select>
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
    </section>
  );
};

export default Slider;
