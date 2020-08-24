import * as yup from "yup";
import api from "../api";

export const signupUserSchema = yup.object().shape({
  taiKhoan: yup.string().required("Bắt buộc nhập"),
  matKhau: yup.string().required("Bắt buộc nhập"),
  hoTen: yup.string().required("Bắt buộc nhập"),
  email: yup.string().required("Bắt buộc nhập").email("Email không hợp lệ"),
  soDt: yup
    .string()
    .required("Bắt buộc nhập")
    .matches(/(03|07|08|09|01[2|6|8|9])+([0-9]{8})\b/),
});

export const signinUserSchema = yup.object().shape({
  taiKhoan: yup.string().required("Bắt buộc nhập"),
  matKhau: yup.string().required("Bắt buộc nhập"),
});

class UserService {
  dangKy = (data) => api.post("/QuanLyNguoiDung/DangKy", data);
  dangNhap = (data) => api.post("/QuanLyNguoiDung/DangNhap", data);
  capNhatThongTin = (data) =>
    api.put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", data);
  layThongTinTaiKhoan = (taiKhoan) =>
    api.post("/QuanLyNguoiDung/ThongTinTaiKhoan", { taiKhoan });
}

export const userService = new UserService();
