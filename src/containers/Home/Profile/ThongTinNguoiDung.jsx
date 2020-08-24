import React from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import {
  signupUserSchema,
  userService,
} from "../../../services/quanLyNguoiDungService";
import Swal from "sweetalert2";

const ThongTinNguoiDung = ({ thongTinND, taiKhoan }) => {
  let { email, hoTen, matKhau, soDT } = thongTinND;

  const handleSubmit = (values) => {
    userService
      .capNhatThongTin(values)
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Cập nhật thông tin thành công!",
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
        // Swal.fire({
        //   icon: "error",
        //   title: err.response.data,
        // });
      });
  };

  return (
    <div className="capnhat_box">
      <Formik
        initialValues={{
          email,
          hoTen,
          matKhau,
          soDt: soDT,
          taiKhoan,
        }}
        validationSchema={signupUserSchema}
        enableReinitialize={true}
        onSubmit={handleSubmit}
      >
        {({ handleChange, values }) => (
          <Form>
            <div className="form_group">
              <div className="form_content">
                <label>Email</label>
                <ErrorMessage name="email">
                  {(msg) => <span className="text">{msg}</span>}
                </ErrorMessage>
              </div>
              <Field
                className="form_control"
                type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
            </div>
            <div className="form_group">
              <div className="form_content">
                <label>Mật khẩu</label>
                <ErrorMessage name="matKhau">
                  {(msg) => <span className="text">{msg}</span>}
                </ErrorMessage>
              </div>
              <Field
                className="form_control"
                type="password"
                name="matKhau"
                value={values.matKhau}
                onChange={handleChange}
              />
            </div>
            <div className="form_group">
              <div className="form_content">
                <label>Họ và tên</label>
                <ErrorMessage name="hoTen">
                  {(msg) => <span className="text">{msg}</span>}
                </ErrorMessage>
              </div>
              <Field
                className="form_control"
                type="text"
                name="hoTen"
                value={values.hoTen}
                onChange={handleChange}
              />
            </div>
            <div className="form_group">
              <div className="form_content">
                <label>Số điện thoại</label>
                <ErrorMessage name="soDt">
                  {(msg) => <span className="text">{msg}</span>}
                </ErrorMessage>
              </div>
              <Field
                className="form_control"
                type="text"
                name="soDt"
                value={values.soDt}
                onChange={handleChange}
              />
            </div>
            <div className="button_box">
              <button type="submit">Cập nhật</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ThongTinNguoiDung;
