import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';

function UserCreate() {
  const navigate = useNavigate();
  const [provinces, setProvinces] = useState([]);

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

  const schema = yup
    .object({
      name: yup.string().required('Tên không được để trống'),
      email: yup
        .string()
        .required('Email không được để trống')
        .matches(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          'Email không hợp lệ'
        ),
      phone: yup
        .string()
        .required('Phone không được để trống')
        .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g, 'Số điện thoại không hợp lệ'),
      address: yup.string().required('Tên không được để trống'),
      password: yup.string().required('Tên không được để trống'),
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

  const onSubmitCreateUser = async (data) => {
    try {
      let res = await axios.post('http://localhost:8080/api/v1/users', data);
      console.log(res.data.id);
      alert('Tạo user thành công');
      setTimeout(() => {
        navigate(`/users/${res.data.id}`);
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center text-uppercase mb-3">Tạo user</h2>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit(onSubmitCreateUser)}>
            <div className="bg-light p-4">
              <div className="mb-3">
                <label className="col-form-label">Name</label>
                <input type="text" id="name" className="form-control" {...register('name')} />
                <p className="text-danger">{errors.name?.message}</p>
              </div>
              <div className="mb-3">
                <label className="col-form-label">Email</label>
                <input type="text" id="email" className="form-control" {...register('email')} />
                <p className="text-danger">{errors.email?.message}</p>
              </div>
              <div className="mb-3">
                <label className="col-form-label">Phone</label>
                <input type="text" id="phone" className="form-control" {...register('phone')} />
                <p className="text-danger">{errors.phone?.message}</p>
              </div>
              <div className="mb-3">
                <label className="col-form-label">Address</label>
                <select className="form-select" id="address" {...register('address')}>
                  <option value="">---Vui Lòng Chọn Tỉnh/ Thành Phố</option>
                  {provinces.map((province) => (
                    <option key={province.code} value={province.name}>
                      {province.name}
                    </option>
                  ))}
                </select>
                <p className="text-danger">{errors.address?.message}</p>
              </div>
              <div className="mb-3">
                <label className="col-form-label">Password</label>
                <input
                  type="text"
                  id="password"
                  className="form-control"
                  {...register('password')}
                />
                <p className="text-danger">{errors.password?.message}</p>
              </div>
            </div>
            <div className="text-center mt-3">
              <Link to={'/users'} className="btn btn-secondary btn-back">
                Quay lại
              </Link>
              <button className="btn btn-success" id="btn-save" type="submit">
                Tạo User
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserCreate;
