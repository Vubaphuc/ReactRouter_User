import React from "react";
import { useParams } from "react-router-dom";

function Detail() {

  let { cousreId } = useParams();

  return (
    <>
      <div className="header d-flex align-items-center">
        <div className="container">
          <div className="d-flex justify-content-start align-items-center">
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
                <a
                  className="text-white text-uppercase ms-5"
                  href="./course-onlab-list.html"
                >
                  Phòng lab
                </a>
                <a
                  className="text-white text-uppercase ms-3"
                  href="./course-online-list.html"
                >
                  Trực tuyến
                </a>
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
          <div className="mb-4">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="./course-list.html">Khóa học</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Spring Boot - Web Back End
                </li>
              </ol>
            </nav>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="main p-4 shadow-sm">
                <h2 className="course-title fs-5">
                  Spring Boot - Web Back End
                </h2>

                <hr />

                <div className="supporter d-flex align-items-center">
                  <div className="supporter-image">
                    <img
                      src="https://media.techmaster.vn/api/static/crop/bv9jp4k51co7nj2mhht0"
                      alt="tư vấn viên"
                      className="rounded-circle w-75 h-75"
                    />
                  </div>
                  <div className="supporter-info">
                    <p>
                      <b>Tư vấn viên :</b>
                      Phạm Thị Mẫn
                    </p>
                    <p>
                      <b>Email :</b>
                      manpham@gmail.com
                    </p>
                    <p>
                      <b>Số điện thoại :</b>
                      0987654321
                    </p>
                  </div>
                </div>

                <hr />

                <div className="course-description">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi, minima voluptatem. Asperiores quos ipsum fugiat ex
                    perferendis iusto, aliquid a dolores magnam repellat, optio
                    sint omnis eum alias, adipisci velit! Nam quod voluptate sit
                    tempore voluptatem accusantium non quis adipisci, rem
                    dolores expedita consequatur repellendus alias explicabo
                    reprehenderit harum nihil nemo cupiditate? Tempore quibusdam
                    possimus quas, dolorem quasi facilis consectetur vero
                    quisquam, incidunt asperiores voluptas autem. Incidunt
                    aspernatur nihil, autem pariatur atque dolorum labore
                    facilis odit possimus nemo quam excepturi rerum adipisci
                    eaque hic assumenda tenetur similique! Ex ab libero fugit
                    harum hic, vero, natus optio, alias accusamus maxime
                    maiores.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 shadow-sm">
                <div className="course-image mb-4">
                  <img src="https://media.techmaster.vn/api/static/8028/bpfneoc51co8tcg6lek0" />
                </div>
                <p>
                  Học phí :
                  <span className="fw-bold course-price">3.000.000 VND</span>
                </p>
                <p>
                  Hình thức học :
                  <span className="fw-bold course-type">Phòng Lab</span>
                </p>
                <button className="btn btn-success">Thêm vào giỏ hàng</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
