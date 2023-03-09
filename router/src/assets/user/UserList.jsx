import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get('http://localhost:8080/api/v1/users');
    setUsers(response.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/api/v1/users/${id}`);
    setUsers(users.filter((user) => user.id !== id));
  }


  const searchByName = (event) => {
    setSearchTerm(event.target.value);
  };





  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center text-uppercase">Danh sách user</h2>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="d-flex justify-content-between align-items-center mt-5 mb-4">
            <Link to={'/users/create'} className="btn btn-warning">
              Tạo user
            </Link>
            <input
              type="text"
              id="search"
              className="form-control w-50"
              placeholder="Tìm kiếm user theo Name"
              onChange={searchByName}
            />
          </div>
          <div className="bg-light p-4">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
              {users
              .filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((user) => (
                  <tr key={user.id}>                 
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.address}</td>
                    <td>
                      <Link to={`/users/${user.id}`} className="btn btn-success">
                        Xem chi tiết
                      </Link>
                      <button className="btn btn-danger" onClick={() => deleteUser(user.id)}>
                        Xóa
                      </button>
                    </td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="message d-none"></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserList;
