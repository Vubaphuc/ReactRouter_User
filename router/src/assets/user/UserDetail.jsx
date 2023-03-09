import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function UserDetail() {
  // lấy ra UserID
  let { userId } = useParams();

  const [user, setUser] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    axios.get('https://provinces.open-api.vn/api/p/')
      .then(response => {
        setProvinces(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const getUser = async () => {
    const response = await axios.get(`http://localhost:8080/api/v1/users/${userId}`);
    setUser(response.data);
  };

  const handleProvinceChange = (event) => {
    setSelectedProvince(event.target.value);
  };

  

  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center text-uppercase mb-3">Thông tin user</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="bg-light p-4">
            <div className="mb-3">
              <label className="col-form-label">Fullname</label>
              <input type="text" id="fullname" className="form-control" value={user.name} />
            </div>
            <div className="mb-3">
              <label className="col-form-label">Email</label>
              <input type="text" id="email" className="form-control" disabled value={user.email} />
            </div>
            <div className="mb-3">
              <label className="col-form-label">Phone</label>
              <input type="text" id="phone" className="form-control" value={user.phone} />
            </div>
            <div className="mb-3">
              <label className="col-form-label">Address</label>

              <select
                value={selectedProvince}
                onChange={handleProvinceChange}
                className="form-select"
                id="address"
              >
                <option value="">{user.address}</option>
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
                  src="https://via.placeholder.com/200"
                  alt="avatar"
                  id="avatar-preview"
                  className="rounded"
                />
              </div>
              <label className="btn btn-warning" htmlFor="input">
                Chọn ảnh
              </label>
              <input type="file" id="input" className="d-none" />
            </div>
            <div className="mb-3">
              <label className="col-form-label">Password</label>
              <div className="">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-change-password"
                >
                  Đổi mật khẩu
                </button>
                <button className="btn btn-warning" id="btn-forgot-password">
                  Quên mật khẩu
                </button>
              </div>
            </div>
          </div>
          <div className="text-center mt-3">
            <Link to={'/users'} className="btn btn-secondary btn-back">Quay lại</Link>
            <button className="btn btn-success" id="btn-save">
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
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
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
                <input type="text" id="old-password" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="col-form-label">Mật khẩu mới</label>
                <input type="text" id="new-password" className="form-control" />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Đóng
              </button>
              <button type="button" className="btn btn-primary" id="btn-change-password">
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
