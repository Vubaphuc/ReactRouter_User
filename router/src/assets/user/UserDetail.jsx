import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

function UserDetail() {
  // lấy ra UserID
  let { userId } = useParams();
  const [user, setUser] = useState([]);
  const [provinces, setProvinces] = useState([]);

  const ENDPOINT = 'http://localhost:8080/api/v1/users';

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    getProvinces();
  }, []);

  const getProvinces = async () => {
    try {
      const response = await axios.get('https://provinces.open-api.vn/api/p/');
      setProvinces(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = async () => {
    try {
      const response = await axios.get(`${ENDPOINT}/${userId}`);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateUser = async (e) => {
    e.preventDefault();

    const userData = {
      name: user.name,
      phone: user.phone,
      address: user.address,
    };

    axios.put(`${ENDPOINT}/${userId}`, userData)
      .then((response) => {
        console.log(response.data);
        alert('Cập nhật thành công!');
      })
      .catch((error) => {
        console.log(error);
        alert('Cập nhật thất bại!');
      });
  };

  

  const forgotPassword = async () => {
    try {
      const rs = await axios.post(`${ENDPOINT}/${userId}/forgot-password`);
      alert("Đã gửi mật khẩu mới tới email");
    } catch (error) {
      console.log(error);
    }
  }


  const handleChangeAvatar = async (e) => {
    const file = e.target.files[0];
    console.log(file);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const rs = await axios.put(`${ENDPOINT}/${userId}/update-avatar`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(rs);
      setUser({ ...user, avatar: rs.data.url });
    } catch (error) {
      console.log(error);
    }
  };

  //

  const schema = yup
    .object({
      oldPassword: yup.string().required('Tên không được để trống'),
      newPassword: yup
        .string()
        .required('Tên không được để trống')
        .test('match', 'Mật khẩu mới không được giống với mật khẩu cũ', function (value) {
          return value === this.parent.oldPassword ? false : true;
        }),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const handleForgotPassword = async (data, event) => {
    event.preventDefault();

    try {
      const rs = await axios.put(`${ENDPOINT}/${userId}/update-password`, data);
      alert('Đổi mật khẩu thành công');
      event.target.reset();
    } catch (error) {
      alert('Mật khẩu cũ không đúng');
      event.target.reset();
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center text-uppercase mb-3">Thông tin user</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="bg-light p-4">
            <div className="mb-3">
              <label className="col-form-label">Fullname</label>
              <input
                type="text"
                id="fullname"
                className="form-control"
                value={user?.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label className="col-form-label">Email</label>
              <input
                type="text"
                id="email"
                className="form-control"
                disabled
                value={user?.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label className="col-form-label">Phone</label>
              <input
                type="text"
                id="phone"
                className="form-control"
                value={user?.phone}
                onChange={(e) => setUser({ ...user, phone: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label className="col-form-label">Address</label>
              <select
                value={user?.address}
                onChange={(e) => setUser({ ...user, address: e.target.value })}
                className="form-select"
                id="address"
              >
                {provinces.map((province) => (
                  <option key={province.code} value={province.name}>
                    {province.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Avatar</label>
              <div className="avatar-preview mb-3 rounded">
                <img
                  src={
                    user?.avatar
                      ? `http://localhost:8080${user?.avatar}`
                      : 'https://via.placeholder.com/200'
                  }
                  alt="avatar"
                  id="avatar-preview"
                  className="rounded"
                />
              </div>
              <label className="btn btn-warning" htmlFor="input">
                Chọn ảnh
              </label>
              <input
                type="file"
                id="input"
                className="d-none"
                onChange={(e) => handleChangeAvatar(e)}
              />
            </div>
            <div className="mb-3">
              <label className="col-form-label">Password</label>
              <div className="">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-change-password"
                  onClick={() => {
                    const confirmButton = document.querySelector('#btn-change-password');
                    confirmButton.setAttribute('data-bs-dismiss', 'modal');
                  }}
                >
                  Đổi mật khẩu
                </button>
                <button
                  className="btn btn-warning"
                  id="btn-forgot-password"
                  onClick={forgotPassword}
                >
                  Quên mật khẩu
                </button>
              </div>
            </div>
          </div>
          <div className="text-center mt-3">
            <Link to={'/users'} className="btn btn-secondary btn-back">
              Quay lại
            </Link>
            <button className="btn btn-success" id="btn-save" onClick={updateUser}>
              Cập nhật
            </button>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="modal-change-password"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="false"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={handleSubmit(handleForgotPassword)}>
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Đổi mật khẩu
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body">
                <div className="mb-3">
                  <label className="col-form-label">Mật khẩu cũ</label>
                  <input
                    type="text"
                    id="old-password"
                    className="form-control"
                    {...register('oldPassword')}
                  />
                  <p className="text-danger">{errors.oldPassword?.message}</p>
                </div>
                <div className="mb-3">
                  <label className="col-form-label">Mật khẩu mới</label>
                  <input
                    type="text"
                    id="new-password"
                    className="form-control"
                    {...register('newPassword')}
                  />
                  <p className="text-danger">{errors.newPassword?.message}</p>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Đóng
                </button>
                <button type="submit" className="btn btn-primary" id="btn-change-password">
                  Xác nhận
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
