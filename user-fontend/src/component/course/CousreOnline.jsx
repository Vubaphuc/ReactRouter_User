import React from "react";

function CousreOnline() {
  return (
    <>
      <div class="header d-flex align-items-center">
        <div class="container">
          <div class="d-flex justify-content-start align-items-center">
            <div class="logo">
              <a href="./course-list.html">
                <img
                  src="https://techmaster.vn/resources/image/logo-techmaster/white/white_200x74.png"
                  alt="logo"
                />
              </a>
            </div>
            <div class="w-100 d-flex justify-content-between align-items-center">
              <div class="menu">
                <a
                  class="text-white text-uppercase ms-5"
                  href="./course-onlab-list.html"
                >
                  Phòng lab
                </a>
                <a
                  class="text-white text-uppercase ms-3"
                  href="./course-online-list.html"
                >
                  Trực tuyến
                </a>
              </div>
              <div class="cart">
                <a class="text-white position-relative" href="/gio-hang">
                  <span class="fs-5">
                    <i class="fa-solid fa-cart-shopping"></i>
                  </span>
                  <span class="cart-count bg-info px-1 rounded-2 position-absolute">
                    0
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="course-container mt-5">
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <h2 class="fs-5 mb-4">Chủ đề</h2>
              <div class="topic-item input-group d-flex align-items-center mb-1">
                <input type="radio" value="Backend" id="backend" name="topic" />
                <label for="backend" class="ms-2 fs-5">
                  Lập trình Backend
                </label>
              </div>
              <div class="topic-item input-group d-flex align-items-center mb-1">
                <input
                  type="radio"
                  value="Frontend"
                  id="frontend"
                  name="topic"
                />
                <label for="frontend" class="ms-2 fs-5">
                  Lập trình Frontend
                </label>
              </div>
              <div class="topic-item input-group d-flex align-items-center mb-1">
                <input type="radio" value="Di động" id="mobile" name="topic" />
                <label for="mobile" class="ms-2 fs-5">
                  Lập trình di động
                </label>
              </div>
              <div class="topic-item input-group d-flex align-items-center mb-1">
                <input
                  type="radio"
                  value="Database"
                  id="database"
                  name="topic"
                />
                <label for="database" class="ms-2 fs-5">
                  Cơ sở dữ liệu
                </label>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-md-4">
                  <div class="seach-form d-flex align-items-center rounded shadow-sm mb-4 pe-3">
                    <input
                      type="text"
                      placeholder="Tìm kiếm khóa học"
                      class="form-control border-0 seach-form-input"
                    />
                    <span class="text-black-50 seach-form-button">
                      <i class="fa-solid fa-magnifying-glass"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="course-list row">
                <div class="col-md-4">
                  <a href="./detail.html">
                    <div class="course-item shadow-sm rounded mb-4">
                      <div class="course-item-image">
                        <img
                          src="https://media.techmaster.vn/api/static/8028/bpfneoc51co8tcg6lek0"
                          alt="Marge Innastraightline"
                        />
                      </div>
                      <div class="course-item-info p-3">
                        <h2 class="fs-5 mb-4 text-dark">
                          Spring Boot - Web Back End
                        </h2>
                        <div class="d-flex justify-content-between align-items-center fw-light text-black-50">
                          <p class="type">Trực tuyến</p>
                          <p class="rating">
                            <span>3</span>
                            <span class="text-warning">
                              <i class="fa-solid fa-star"></i>
                            </span>
                          </p>
                        </div>
                        <p class="price text-danger fs-5">3.000.000 VND</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-md-4">
                  <a href="./detail.html">
                    <div class="course-item shadow-sm rounded mb-4">
                      <div class="course-item-image">
                        <img
                          src="https://media.techmaster.vn/api/static/8028/bpfneoc51co8tcg6lek0"
                          alt="Marge Innastraightline"
                        />
                      </div>
                      <div class="course-item-info p-3">
                        <h2 class="fs-5 mb-4 text-dark">
                          Spring Boot - Web Back End
                        </h2>
                        <div class="d-flex justify-content-between align-items-center fw-light text-black-50">
                          <p class="type">Trực tuyến</p>
                          <p class="rating">
                            <span>3</span>
                            <span class="text-warning">
                              <i class="fa-solid fa-star"></i>
                            </span>
                          </p>
                        </div>
                        <p class="price text-danger fs-5">3.000.000 VND</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-md-4">
                  <a href="./detail.html">
                    <div class="course-item shadow-sm rounded mb-4">
                      <div class="course-item-image">
                        <img
                          src="https://media.techmaster.vn/api/static/8028/bpfneoc51co8tcg6lek0"
                          alt="Marge Innastraightline"
                        />
                      </div>
                      <div class="course-item-info p-3">
                        <h2 class="fs-5 mb-4 text-dark">
                          Spring Boot - Web Back End
                        </h2>
                        <div class="d-flex justify-content-between align-items-center fw-light text-black-50">
                          <p class="type">Trực tuyến</p>
                          <p class="rating">
                            <span>3</span>
                            <span class="text-warning">
                              <i class="fa-solid fa-star"></i>
                            </span>
                          </p>
                        </div>
                        <p class="price text-danger fs-5">3.000.000 VND</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-md-4">
                  <a href="./detail.html">
                    <div class="course-item shadow-sm rounded mb-4">
                      <div class="course-item-image">
                        <img
                          src="https://media.techmaster.vn/api/static/8028/bpfneoc51co8tcg6lek0"
                          alt="Marge Innastraightline"
                        />
                      </div>
                      <div class="course-item-info p-3">
                        <h2 class="fs-5 mb-4 text-dark">
                          Spring Boot - Web Back End
                        </h2>
                        <div class="d-flex justify-content-between align-items-center fw-light text-black-50">
                          <p class="type">Trực tuyến</p>
                          <p class="rating">
                            <span>3</span>
                            <span class="text-warning">
                              <i class="fa-solid fa-star"></i>
                            </span>
                          </p>
                        </div>
                        <p class="price text-danger fs-5">3.000.000 VND</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-md-4">
                  <a href="./detail.html">
                    <div class="course-item shadow-sm rounded mb-4">
                      <div class="course-item-image">
                        <img
                          src="https://media.techmaster.vn/api/static/8028/bpfneoc51co8tcg6lek0"
                          alt="Marge Innastraightline"
                        />
                      </div>
                      <div class="course-item-info p-3">
                        <h2 class="fs-5 mb-4 text-dark">
                          Spring Boot - Web Back End
                        </h2>
                        <div class="d-flex justify-content-between align-items-center fw-light text-black-50">
                          <p class="type">Trực tuyến</p>
                          <p class="rating">
                            <span>3</span>
                            <span class="text-warning">
                              <i class="fa-solid fa-star"></i>
                            </span>
                          </p>
                        </div>
                        <p class="price text-danger fs-5">3.000.000 VND</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-md-4">
                  <a href="./detail.html">
                    <div class="course-item shadow-sm rounded mb-4">
                      <div class="course-item-image">
                        <img
                          src="https://media.techmaster.vn/api/static/8028/bpfneoc51co8tcg6lek0"
                          alt="Marge Innastraightline"
                        />
                      </div>
                      <div class="course-item-info p-3">
                        <h2 class="fs-5 mb-4 text-dark">
                          Spring Boot - Web Back End
                        </h2>
                        <div class="d-flex justify-content-between align-items-center fw-light text-black-50">
                          <p class="type">Trực tuyến</p>
                          <p class="rating">
                            <span>3</span>
                            <span class="text-warning">
                              <i class="fa-solid fa-star"></i>
                            </span>
                          </p>
                        </div>
                        <p class="price text-danger fs-5">3.000.000 VND</p>
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

export default CousreOnline;
