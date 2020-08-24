import React, { useState, Fragment } from "react";
import "./index.scss";
import { Modal } from "antd";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { signinUserSchema } from "../../services/quanLyNguoiDungService";
import { loginAction } from "../../store/actions/quanLyNguoiDungAction";
import { useDispatch } from "react-redux";

const SignIn = () => {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);

  const handleOpenModal = () => {
    setVisible(true);
  };
  const handleCloseModal = () => {
    setVisible(false);
  };
  const handleSubmit = (values) => {
    dispatch(loginAction(values));
  };
  return (
    <Fragment>
      <span className="span_item" onClick={handleOpenModal}>
        Đăng nhập
      </span>
      <Modal
        visible={visible}
        onCancel={handleCloseModal}
        confirmLoading={false}
        footer={null}
        width={400}
      >
        <section className="modal_form">
          <p className="title">Đăng nhập</p>
          <div className="content_box">
            <Formik
              initialValues={{
                taiKhoan: "",
                matKhau: "",
              }}
              validationSchema={signinUserSchema}
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
                        {(msg) => (
                          <span className="text text-danger">{msg}</span>
                        )}
                      </ErrorMessage>
                    </div>
                    <Field
                      className="form_control"
                      type="password"
                      name="matKhau"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="button_box">
                    <button type="submit">Đăng nhập</button>
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

export default SignIn;
