import { combineReducers } from "redux";
import quanLyPhimReducer from "./quanLyPhimReducer";
import quanLyNguoiDungReducer from "./quanLyNguoiDungReducer";

const rootReducer = combineReducers({
  movie: quanLyPhimReducer,
  user: quanLyNguoiDungReducer,
});

export default rootReducer;
