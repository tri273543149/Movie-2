import {
  FETCH_CREDENTIALS,
  FETCH_USER_INFO,
} from "../constants/quanLyNguoiDungConstant";

let initialState = {
  credentials: null,
  profile: {},
};

const quanLyNguoiDungReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CREDENTIALS:
      return { ...state, credentials: action.payload };
    case FETCH_USER_INFO:
      return { ...state, profile: action.payload };
    default:
      return { ...state };
  }
};

export default quanLyNguoiDungReducer;
