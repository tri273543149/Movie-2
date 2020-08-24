import { FETCH_CREDENTIALS } from "../constants/quanLyNguoiDungConstant";
import setHeaders from "../../helpers/setHeaders";
import { createAction } from ".";
import Swal from "sweetalert2";
import { userService } from "../../services/quanLyNguoiDungService";

export const loginAction = (data) => {
  return (dispatch) => {
    userService
      .dangNhap(data)
      .then((res) => {
        dispatch(createAction(FETCH_CREDENTIALS, res.data));
        localStorage.setItem("credentials", JSON.stringify(res.data));
        localStorage.setItem("token", res.data.accessToken);
        setHeaders(res.data.accessToken);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login succed",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: err.response.data,
        });
      });
  };
};

export const logout = () => {
  return dispatch => {
    localStorage.removeItem("credentials");
    localStorage.removeItem("token");
    dispatch(createAction(FETCH_CREDENTIALS, null))
  }
}