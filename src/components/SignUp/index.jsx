import React, { useState, Fragment } from "react";
import "./index.scss";
import { Modal } from "antd";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { groupID } from "../../config/setting";
import { signupUserSchema } from "../../services/quanLyNguoiDungService";
import { userService } from "../../services/quanLyNguoiDungService";
import Swal from "sweetalert2";

const SignUp = () => {
  const [visible, setVisible] = useState(false);

  const handleOpenModal = () => {
    setVisible(true);
  };
  const handleCloseModal = () => {
    setVisible(false);
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    userService
      .dangKy(values)
      .then((res) => {
        setVisible(false);
        resetForm({ values: "" });
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Sign Up succeed",
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

  return (
    <Fragment>
      <span className="span_item" onClick={handleOpenModal}>
        Đăng ký
      </span>
      <Modal
        visible={visible}
        onCancel={handleCloseModal}
        confirmLoading={false}
        footer={null}
        width={400}
      >
        <section className="modal_form">
          <p className="title">Đăng ký thành viên</p>
          <div className="content_box">
            <Formik
              initialValues={{
                taiKhoan: "",
                matKhau: "",
                email: "",
                hoTen: "",
                soDt: "",
                maNhom: groupID,
                maLoaiNguoiDung: "KhachHang",
              }}
              validationSchema={signupUserSchema}
              onSubmit={handleSubmit}
            >
              {({ handleChange }) => (
                <Form>
                  <div className="form_group">
                    <div className="form_label">
                      <label>Tài khoản</label>
                      <ErrorMessage name="taiKhoan">
                        {(msg) => <span className="text">{msg}</span>}
                      </ErrorMessage>
                    </div>
                    <Field
                      className="form_control"
                      type="text"
                      name="taiKhoan"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form_group">
                    <div className="form_label">
                      <label>Mật khẩu</label>
                      <ErrorMessage name="matKhau">
                        {(msg) => <span className="text">{msg}</span>}
                      </ErrorMessage>
                    </div>
                    <Field
                      className="form_control"
                      type="password"
                      name="matKhau"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form_group">
                    <div className="form_label">
                      <label>Email</label>
                      <ErrorMessage name="email">
                        {(msg) => <span className="text">{msg}</span>}
                      </ErrorMessage>
                    </div>
                    <Field
                      className="form_control"
                      type="text"
                      name="email"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form_group">
                    <div className="form_label">
                      <label>Họ và tên</label>
                      <ErrorMessage name="hoTen">
                        {(msg) => <span className="text">{msg}</span>}
                      </ErrorMessage>
                    </div>
                    <Field
                      className="form_control"
                      type="text"
                      name="hoTen"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form_group">
                    <div className="form_label">
                      <label>Số điện thoại</label>
                      <ErrorMessage name="soDt">
                        {(msg) => <span className="text">{msg}</span>}
                      </ErrorMessage>
                    </div>
                    <Field
                      className="form_control"
                      type="text"
                      name="soDt"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="button_box">
                    <button type="submit">Đăng ký</button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </section>
      </Modal>
    </Fragment>
  );
};

export default SignUp;
