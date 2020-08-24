import React, { Fragment } from 'react';
import Slider from "../../layouts/Slider";
import PaginatedMovieList from "../../layouts/PaginatedMovieList";

const HomeLayout = () => {
    return (
        <Fragment>
            <Slider />
            <PaginatedMovieList />
        </Fragment>
    );
};

export default HomeLayout;