import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function UserCreate() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [provinces, setProvinces] = useState([]);
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');



  useEffect(() => {
    axios
      .get('https://provinces.open-api.vn/api/p/')
      .then((response) => {
        setProvinces(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim()) {
      alert("Name vui lòng không để trống");
      return;
    }
    if (!email.trim()) {
      alert("Email vui lòng không để trống");
      return;
    }
    if (!phone.trim()) {
      alert("Phone vui lòng không để trống");
      return;
    }
    if (!address.trim()) {
      alert("Address vui lòng không để trống");
      return;
    }
    if (!password.trim()) {
      alert("Password vui lòng không để trống");
      return;
    }

    const payload = {
      name,
      email,
      phone,
      address: address,
      password,
    };
    axios.post('http://localhost:8080/api/v1/users', payload)
        .then((response) => {
          const userId = response.data.id;
          window.location.href = `http://localhost:5175/users/${userId}`;
          alert('tạo tài khoản thành công');
        })
        .catch((error) => {
          console.log(error);
        });

    
  };


  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center text-uppercase mb-3">Tạo user</h2>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="bg-light p-4">
            <div className="mb-3">
              <label className="col-form-label">Name</label>
              <input
                type="text"
                id="name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="col-form-label">Email</label>
              <input
                type="text"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="col-form-label">Phone</label>
              <input
                type="text"
                id="phone"
                className="form-control"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="col-form-label">Address</label>
              <select
                className="form-select"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              >
                <option value="">--- Vui lòng chọn tỉnh hoặc Thành Phố ---</option>
                {provinces.map((province) => (
                  <option key={province.code} value={province.name}>
                    {province.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label className="col-form-label">Password</label>
              <input
                type="text"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="text-center mt-3">
            <Link to={'/users'} className="btn btn-secondary btn-back">
              Quay lại
            </Link>

            <button type='submit' className="btn btn-success" id="btn-save" onClick={handleSubmit}>
              Tạo User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCreate;
