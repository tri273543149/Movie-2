import { FETCH_MOVIE_LIST } from "../constants/quanLyPhimConstant";

let initialState = {
  movieList: [],
};

const quanLyPhimReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIE_LIST:
      return { ...state, movieList: action.payload };
    default:
      return { ...state };
  }
};

export default quanLyPhimReducer;