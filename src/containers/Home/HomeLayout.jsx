import React, { Fragment } from 'react';
import Slider from "../../layouts/Slider";
import PaginatedMovieList from "../../layouts/PaginatedMovieList";
import HeThongPhongVe from "../../layouts/HeThongPhongVe";

const HomeLayout = () => {
    return (
        <Fragment>
            <Slider />
            <PaginatedMovieList />
            <HeThongPhongVe />
        </Fragment>
    );
};

export default HomeLayout;