import { movieService } from "../../services/quanLyPhimService";
import { createAction } from ".";
import { FETCH_MOVIE_LIST } from "../constants/quanLyPhimConstant";

export const fetchMovieListAction = () => {
    return dispatch => {
        movieService
        .layDanhSachPhim()
        .then(res => {
            dispatch(createAction(FETCH_MOVIE_LIST, res.data));
        })
        .catch(err => console.log(err));
    }
}