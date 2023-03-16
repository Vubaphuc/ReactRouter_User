import React from "react";
import { Link } from "react-router-dom";

function CourseList() {
  return (
    <>
      <div className="header d-flex align-items-center">
        <div className="container">for=
          <div className="d-flex justify-content-start align-items-center header-menu">
            <div className="logo">
              <a href="./course-list.html">
                <img
                  src="https://techmaster.vn/resources/image/logo-techmaster/white/white_200x74.png"
                  alt="logo"
                />
              </a>
            </div>
            <div className="w-100 d-flex justify-content-between align-items-center">
              <div className="menu">
                <Link to={"phong-lab"}
                  className="text-white text-uppercase ms-5"
                >
                  Phòng lab
                </Link>
                <Link to={"truc-tuyen"}
                  className="text-white text-uppercase ms-3"
                  href="./course-online-list.html"
                >
                  Trực tuyến
                </Link>
              </div>
              <div className="cart">
                <a className="text-white position-relative" href="/gio-hang">
                  <span className="fs-5">
                    <i className="fa-solid fa-cart-shopping"></i>
                  </span>
                  <span className="cart-count bg-info px-1 rounded-2 position-absolute">
                    0
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="course-container mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h2 className="fs-5 mb-4">Chủ đề</h2>
              <div className="topic-item input-group d-flex align-items-center mb-1">
                <input type="radio" value="Backend" id="backend" name="topic" />
                <label for="backend" className="ms-2 fs-5">
                  Lập trình Backend
                </label>
              </div>
              <div className="topic-item input-group d-flex align-items-center mb-1">
                <input
                  type="radio"
                  value="Frontend"
                  id="frontend"
                  name="topic"
                />
                <label for="frontend" className="ms-2 fs-5">
                  Lập trình Frontend
                </label>
              </div>
              <div className="topic-item input-group d-flex align-items-center mb-1">
                <input type="radio" value="Di động" id="mobile" name="topic" />
                <label for="mobile" className="ms-2 fs-5">
                  Lập trình di động
                </label>
              </div>
              <div className="topic-item input-group d-flex align-items-center mb-1">
                <input
                  type="radio"
                  value="Database"
                  id="database"
                  name="topic"
                />
                <label for="database" className="ms-2 fs-5">
                  Cơ sở dữ liệu
                </label>
              </div>
            </div>

            <div className="col-md-9">
              <div className="row">
                <div className="col-md-4">
                  <div className="seach-form d-flex align-items-center rounded shadow-sm mb-4 pe-3">
                    <input
                      type="text"
                      placeholder="Tìm kiếm khóa học"
                      className="form-control border-0 seach-form-input"
                    />
                    <span className="text-black-50 seach-form-button">
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="course-list row">
                <div className="col-md-4">
                  <a href="./detail.html">
                    <div className="course-item shadow-sm rounded mb-4">
                      <div className="course-item-image">
                        <img
                          src="https://media.techmaster.vn/api/static/8028/bpfneoc51co8tcg6lek0"
                          alt="Marge Innastraightline"
                        />
                      </div>
                      <div className="course-item-info p-3">
                        <h2 className="fs-5 mb-4 text-dark">
                          Spring Boot - Web Back End
                        </h2>
                        <div className="d-flex justify-content-between align-items-center fw-light text-black-50">
                          <p className="type">Trực tuyến</p>
                          <p className="rating">
                            <span>3</span>
                            <span className="text-warning">
                              <i className="fa-solid fa-star"></i>
                            </span>
                          </p>
                        </div>
                        <p className="price text-danger fs-5">3.000.000 VND</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-4">
                  <a href="./detail.html">
                    <div className="course-item shadow-sm rounded mb-4">
                      <div className="course-item-image">
                        <img
                          src="https://media.techmaster.vn/api/static/8028/bpfneoc51co8tcg6lek0"
                          alt="Marge Innastraightline"
                        />
                      </div>
                      <div className="course-item-info p-3">
                        <h2 className="fs-5 mb-4 text-dark">
                          Spring Boot - Web Back End
                        </h2>
                        <div className="d-flex justify-content-between align-items-center fw-light text-black-50">
                          <p className="type">Phòng Lab</p>
                          <p className="rating">
                            <span>3</span>
                            <span className="text-warning">
                              <i className="fa-solid fa-star"></i>
                            </span>
                          </p>
                        </div>
                        <p className="price text-danger fs-5">3.000.000 VND</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-4">
                  <a href="./detail.html">
                    <div className="course-item shadow-sm rounded mb-4">
                      <div className="course-item-image">
                        <img
                          src="https://media.techmaster.vn/api/static/8028/bpfneoc51co8tcg6lek0"
                          alt="Marge Innastraightline"
                        />
                      </div>
                      <div className="course-item-info p-3">
                        <h2 className="fs-5 mb-4 text-dark">
                          Spring Boot - Web Back End
                        </h2>
                        <div className="d-flex justify-content-between align-items-center fw-light text-black-50">
                          <p className="type">Phòng Lab</p>
                          <p className="rating">
                            <span>3</span>
                            <span className="text-warning">
                              <i className="fa-solid fa-star"></i>
                            </span>
                          </p>
                        </div>
                        <p className="price text-danger fs-5">3.000.000 VND</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-4">
                  <a href="./detail.html">
                    <div className="course-item shadow-sm rounded mb-4">
                      <div className="course-item-image">
                        <img
                          src="https://media.techmaster.vn/api/static/8028/bpfneoc51co8tcg6lek0"
                          alt="Marge Innastraightline"
                        />
                      </div>
                      <div className="course-item-info p-3">
                        <h2 className="fs-5 mb-4 text-dark">
                          Spring Boot - Web Back End
                        </h2>
                        <div className="d-flex justify-content-between align-items-center fw-light text-black-50">
                          <p className="type">Trực tuyến</p>
                          <p className="rating">
                            <span>3</span>
                            <span className="text-warning">
                              <i className="fa-solid fa-star"></i>
                            </span>
                          </p>
                        </div>
                        <p className="price text-danger fs-5">3.000.000 VND</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-4">
                  <a href="./detail.html">
                    <div className="course-item shadow-sm rounded mb-4">
                      <div className="course-item-image">
                        <img
                          src="https://media.techmaster.vn/api/static/8028/bpfneoc51co8tcg6lek0"
                          alt="Marge Innastraightline"
                        />
                      </div>
                      <div className="course-item-info p-3">
                        <h2 className="fs-5 mb-4 text-dark">
                          Spring Boot - Web Back End
                        </h2>
                        <div className="d-flex justify-content-between align-items-center fw-light text-black-50">
                          <p className="type">Phòng Lab</p>
                          <p className="rating">
                            <span>3</span>
                            <span className="text-warning">
                              <i className="fa-solid fa-star"></i>
                            </span>
                          </p>
                        </div>
                        <p className="price text-danger fs-5">3.000.000 VND</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-4">
                  <a href="./detail.html">
                    <div className="course-item shadow-sm rounded mb-4">
                      <div className="course-item-image">
                        <img
                          src="https://media.techmaster.vn/api/static/8028/bpfneoc51co8tcg6lek0"
                          alt="Marge Innastraightline"
                        />
                      </div>
                      <div className="course-item-info p-3">
                        <h2 className="fs-5 mb-4 text-dark">
                          Spring Boot - Web Back End
                        </h2>
                        <div className="d-flex justify-content-between align-items-center fw-light text-black-50">
                          <p className="type">Trực tuyến</p>
                          <p className="rating">
                            <span>3</span>
                            <span className="text-warning">
                              <i className="fa-solid fa-star"></i>
                            </span>
                          </p>
                        </div>
                        <p className="price text-danger fs-5">3.000.000 VND</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseList;
