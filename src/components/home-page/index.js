import { Navbar } from "../navbar";
import "./home-page.css";
import biznesmens from "../image/biznesmens.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import person1 from "../image/person1.png";
import person2 from "../image/person2.png";
import person3 from "../image/person3.png";
import opa from "../image/opa.png";
import ommabop1 from "../image/ommabop1.png";
import ommabop2 from "../image/ommabop2.png";
import ommabop3 from "../image/ommabop3.png";
import ommabop4 from "../image/ommabop4.png";
import yonalish1 from "../image/yo'nalish1.png";
import yonalish2 from "../image/yo'nalish2.png";
import yonalish3 from "../image/yo'nalish3.png";
import yonalish4 from "../image/yo'nalish4.png";
import yonalish5 from "../image/yo'nalish5.png";
import yonalish6 from "../image/yo'nalish6.png";
import kutish1 from "../image/kutilayotgan1.png";
import kutish2 from "../image/kutilayotgan2.png";
import carousel from "../image/carousel.png";
import { Carousel, Checkbox } from "antd";
import { useState } from "react";
import { Footer } from "../footer";
import { useNavigate } from "react-router";

export const HomePage = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [active, setActive] = useState(1);
  const navigate = useNavigate();
  return (
    <div style={{ height: "100vh", margin:"0px", padding:"0px" }}>
      <div
        style={{
          background:
            " linear-gradient(3.15deg, #000000 53.27%, #0E0742 98.18%)",
        }}
      >
        <Navbar />
        <div className="row container-fluid mx-auto pb-4">
          <div className="col-lg-4 col-md-6 col-12 mt-3">
            <div className="text-center">
              <p
                style={{ color: "#FFFFFF", fontSize: "40px" }}
                className="fw-bold p-0 m-0"
              >
                ULAR DUNYONI O'ZGARTIRDILAR.
                <span style={{ color: "#E32652" }}> ENDI SEN.</span>
              </p>
              <p
                style={{ color: "#FFFFFF", fontSize: "24px" }}
                className="py-3 m-0"
              >
                Dunyodagi eng ilhomlantiruvchi rassomlar, yetakchilar va
                tadbirkorlardan o'rganing.
              </p>
            </div>
            <div>
              <input
                className="p-2 form-control text-white"
                style={{
                  backgroundColor: "#20234E",
                  border: "1px solid #45497D",
                  borderRadius: "12px",
                }}
                placeholder="Sizning e-pochta manzilingiz"
              />
              <button
                onClick={() => {
                  navigate("/photo");window.scrollTo(0, 0);
                }}
                style={{
                  backgroundColor: "#E32652",
                  borderRadius: "12px",
                  fontSize: "18px",
                }}
                className="btn w-100 border-0 mt-3 p-2 text-white"
              >
                Boshlash
              </button>
            </div>
            <div className="text-center mt-3">
              <p
                style={{ fontSize: "20px", color: "#FFFFFF" }}
                className="py-2 m-0 "
              >
                Barcha darslar va sessiyalar uchun oyiga $15 dan (har yili
                to'lanadi).
              </p>
              <p
                style={{ fontSize: "14px", color: "#FFFFFF" }}
                className="p-0 m-0"
              >
                Elektron pochtangizni baham ko'rish orqali siz bizning
                Foydalanish shartlari va Maxfiylik siyosatimizga rozilik
                bildirasiz.
              </p>
            </div>
          </div>
          <div className="col-lg-8 col-md-6 col-12 col-12 mt-3">
            <img
              className="w-100 h-100 rounded object-fit-cover"
              src={biznesmens}
            />
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#FFFFF2" }} className="text-center py-5">
        <div className="container-fluid mx-auto">
          <p style={{ color: "#002333", fontSize: "64px" }}>
            Hayot davomida o'rganishni kashf eting
          </p>
          <div
            style={{ overflowX: "scroll" }}
            className="d-flex align-items-center gap-3 justify-content-center flex-wrap my-5"
          >
            <button
              onClick={() => {
                setActive(1);
              }}
              style={
                active === 1
                  ? {
                      color: "#E32652",
                      borderBottom: "3px solid #E32652",
                      borderTop: "0",
                      borderLeft: "0",
                      borderRight: "0",
                      fontSize: "24px",
                    }
                  : {
                      fontSize: "24px",
                      borderTop: "0",
                      borderLeft: "0",
                      borderRight: "0",
                      borderBottom: "0",
                    }
              }
              className="btnn bg-transparent rounded-0"
            >
              Barcha toifalar
            </button>
            <button
              onClick={() => {
                setActive(2);
              }}
              style={
                active === 2
                  ? {
                      color: "#E32652",
                      borderBottom: "3px solid #E32652",
                      borderTop: "0",
                      borderLeft: "0",
                      borderRight: "0",
                      fontSize: "24px",
                    }
                  : {
                      fontSize: "24px",
                      borderTop: "0",
                      borderLeft: "0",
                      borderRight: "0",
                      borderBottom: "0",
                    }
              }
              className="btnn bg-transparent rounded-0"
            >
              Animatsiya
            </button>
            <button
              onClick={() => {
                setActive(3);
              }}
              style={
                active === 3
                  ? {
                      color: "#E32652",
                      borderBottom: "3px solid #E32652",
                      borderTop: "0",
                      borderLeft: "0",
                      borderRight: "0",
                      fontSize: "24px",
                    }
                  : {
                      fontSize: "24px",
                      borderTop: "0",
                      borderLeft: "0",
                      borderRight: "0",
                      borderBottom: "0",
                    }
              }
              className="btnn bg-transparent rounded-0"
            >
              Dizayn
            </button>
            <button
              onClick={() => {
                setActive(4);
              }}
              style={
                active === 4
                  ? {
                      color: "#E32652",
                      borderBottom: "3px solid #E32652",
                      borderTop: "0",
                      borderLeft: "0",
                      borderRight: "0",
                      fontSize: "24px",
                    }
                  : {
                      fontSize: "24px",
                      borderTop: "0",
                      borderLeft: "0",
                      borderRight: "0",
                      borderBottom: "0",
                    }
              }
              className="btnn bg-transparent rounded-0"
            >
              Tasvir
            </button>
            <button
              onClick={() => {
                setActive(5);
              }}
              style={
                active === 5
                  ? {
                      color: "#E32652",
                      borderBottom: "3px solid #E32652",
                      borderTop: "0",
                      borderLeft: "0",
                      borderRight: "0",
                      fontSize: "24px",
                    }
                  : {
                      fontSize: "24px",
                      borderTop: "0",
                      borderLeft: "0",
                      borderRight: "0",
                      borderBottom: "0",
                    }
              }
              className="btnn bg-transparent rounded-0"
            >
              Hayot tarzi
            </button>
            <button
              onClick={() => {
                setActive(6);
              }}
              style={
                active === 6
                  ? {
                      color: "#E32652",
                      borderBottom: "3px solid #E32652",
                      borderTop: "0",
                      borderLeft: "0",
                      borderRight: "0",
                      fontSize: "24px",
                    }
                  : {
                      fontSize: "24px",
                      borderTop: "0",
                      borderLeft: "0",
                      borderRight: "0",
                      borderBottom: "0",
                    }
              }
              className="btnn bg-transparent rounded-0"
            >
              Biznes
            </button>
          </div>

          <Swiper
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper pt-4"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1100: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            <SwiperSlide
              style={{ borderRadius: "12px", backgroundColor: "#fff" }}
            >
              <div className="d-flex flex-column">
                <img
                  style={{
                    borderRadius: "12px 12px 0px 0px",
                    objectFit: "cover",
                    flex: "1",
                  }}
                  className="w-100"
                  src={person1}
                />
                <div className="text-center mt-3">
                  <p style={{ color: "#001A25", fontSize: "20px" }}>
                    Potensialingizni ochish: Ijodiy ishonchni mustahkamlash
                    uchun 5 ta mashq
                  </p>
                  <p style={{ fontSize: "18px", color: "#000000" }}>
                    Emma Gannon
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-100" style={{ borderRadius: "12px" }}>
                <img
                  style={{ borderRadius: "12px, 12px, 0px, 0px" }}
                  className="w-100"
                  src={person3}
                />
                <div className="text-center mt-3">
                  <p style={{ color: "#001A25", fontSize: "20px" }}>
                    O'rmondagi akvarel: tabiiy dunyoni bo'yash uchun yangi
                    boshlanuvchilar uchun
                  </p>
                  <p style={{ fontSize: "18px", color: "#000000" }}>
                    Rozali Xayzlett
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-100" style={{ borderRadius: "12px" }}>
                <img
                  style={{ borderRadius: "12px, 12px, 0px, 0px" }}
                  className="w-100"
                  src={person2}
                />
                <div className="text-center mt-3">
                  <p style={{ color: "#001A25", fontSize: "20px" }}>
                    Potensialingizni ochish: Ijodiy ishonchni mustahkamlash
                    uchun 5 ta mashq
                  </p>
                  <p style={{ fontSize: "18px", color: "#000000" }}>
                    Emma Gannon
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-100" style={{ borderRadius: "12px" }}>
                <img
                  style={{ borderRadius: "12px, 12px, 0px, 0px" }}
                  className="w-100"
                  src={person1}
                />
                <div className="text-center mt-3">
                  <p style={{ color: "#001A25", fontSize: "20px" }}>
                    Potensialingizni ochish: Ijodiy ishonchni mustahkamlash
                    uchun 5 ta mashq
                  </p>
                  <p style={{ fontSize: "18px", color: "#000000" }}>
                    Emma Gannon
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-100">
                <img
                  style={{ borderRadius: "12px, 12px, 0px, 0px" }}
                  className="w-100"
                  src={person3}
                />
                <div className="text-center mt-3">
                  <p style={{ color: "#001A25", fontSize: "20px" }}>
                    Potensialingizni ochish: Ijodiy ishonchni mustahkamlash
                    uchun 5 ta mashq
                  </p>
                  <p style={{ fontSize: "18px", color: "#000000" }}>
                    Emma Gannon
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div style={{ backgroundColor: "black" }}>
        <div className="container-fluid">
          <p
            style={{ fontSize: "40px", paddingTop: "70px" }}
            className="text-white mb-3 "
          >
            150 dan ortiq o'qituvchilarga cheksiz kirish. Har oy yangi kurslar
            qo'shiladi.
          </p>
          <div
            style={{
              background:
                "linear-gradient(89.76deg, #BD9E72 45.1%, rgba(189, 158, 114, 0) 74.61%)",
              borderRadius: "24px",
              height: "100%",
              width: "100%",
            }}
            className="row"
          >
            <div className="col-lg-8 col-md-7  d-flex justify-content-center align-items-center">
              <img className="w-100 h-100" src={opa} />
            </div>
            <div className="col-lg-4 col-md-5 d-flex justify-content-center align-items-center">
              <div
                style={{ width: "379px", height: "379px" }}
                className="p-4 text-center h-100"
              >
                <p style={{ fontSize: "72px" }} className="text-white">
                  Kris Jenner
                </p>
                <p style={{ fontSize: "24px" }} className="text-white w-100">
                  Shaxsiy brending kuchi haqida
                </p>
                <button
                  onClick={() => {
                    navigate("/about-kurs");window.scrollTo(0, 0);
                  }}
                  className="btn text-white w-100"
                  style={{ fontSize: "18px", backgroundColor: "#272C33" }}
                >
                  KO'PROQ MA'LUMOT OLISH UCHUN
                </button>
              </div>
            </div>
          </div>

          <div className="d-flex align-items-end flex-wrap gap-4 mt-5 py-5">
            <p
              style={{ fontSize: "64px", color: "#FFFFFF" }}
              className="p-0 m-0"
            >
              Ommabop
            </p>
            <p
              style={{ color: "#FFFFFF", fontSize: "32px", opacity: "60%" }}
              className="p-0 m-0"
            >
              Hammasini ko'rish
            </p>
          </div>
          <div className="text-center">
            <Swiper
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 25,
                },
                1250: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
            >
              <SwiperSlide
                onClick={() => {
                  navigate("/about-kurs");
                }}
                style={{ backgroundColor: "black", cursor: "pointer" }}
              >
                <div
                  style={{
                    borderRadius: "24px",
                  }}
                >
                  <img
                    style={{ borderRadius: "12px, 12px, 0px, 0px" }}
                    className="w-100"
                    src={ommabop1}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide
                onClick={() => {
                  navigate("/about-kurs");
                }}
                style={{ backgroundColor: "black", cursor: "pointer" }}
              >
                <div
                  style={{
                    borderRadius: "24px",
                  }}
                >
                  <img
                    style={{ borderRadius: "12px, 12px, 0px, 0px" }}
                    className="w-100"
                    src={ommabop2}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide
                onClick={() => {
                  navigate("/about-kurs");
                }}
                style={{ backgroundColor: "black", cursor: "pointer" }}
              >
                <div
                  style={{
                    borderRadius: "24px",
                  }}
                >
                  <img
                    style={{ borderRadius: "12px, 12px, 0px, 0px" }}
                    className="w-100"
                    src={ommabop3}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide
                onClick={() => {
                  navigate("/about-kurs");
                }}
                style={{ backgroundColor: "black", cursor: "pointer" }}
              >
                <div
                  style={{
                    borderRadius: "24px",
                  }}
                >
                  <img
                    style={{ borderRadius: "12px, 12px, 0px, 0px" }}
                    className="w-100"
                    src={ommabop4}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide
                onClick={() => {
                  navigate("/about-kurs");
                }}
                style={{ backgroundColor: "black", cursor: "pointer" }}
              >
                <div
                  style={{
                    borderRadius: "24px",
                  }}
                >
                  <img
                    style={{ borderRadius: "12px, 12px, 0px, 0px" }}
                    className="w-100"
                    src={ommabop3}
                  />
                </div>
              </SwiperSlide>
            </Swiper>
            <button
              onClick={() => {
                navigate("/soon");window.scrollTo(0, 0);  
              }}
              className="btn text-white my-5 "
              style={{ fontSize: "18px", backgroundColor: "#272C33" }}
            >
              KO'PROQ MA'LUMOT OLISH UCHUN
            </button>

            <p style={{ fontSize: "48px" }} className="text-white">
              Bizning yo'nalishlarimiz bilan tanishing.
            </p>
            <p
              style={{ fontSize: "24px", opacity: "60%" }}
              className="text-white"
            >
              Qo'shimcha ma'lumot olish uchun sizni qiziqtirgan toifalarni
              tanlang.
            </p>

            <div className="row my-5">
              <div className="col-lg-4">
                <div
                  style={{ border: "1px solid #525252" }}
                  className="d-flex align-items-center justify-content-between rounded p-2 mb-3"
                >
                  <div className="d-flex align-items-center gap-3 text-white">
                    <img
                      style={{ width: "56px", height: "56px" }}
                      src={yonalish1}
                    />
                    <p style={{ fontSize: "32px" }} className="p-0 m-0">
                      Ovqat
                    </p>
                  </div>
                  <Checkbox />
                </div>
              </div>

              <div className="col-lg-4">
                <div
                  style={{ border: "1px solid #525252" }}
                  className="d-flex align-items-center justify-content-between rounded p-2 mb-3"
                >
                  <div className="d-flex align-items-center gap-3 text-white">
                    <img
                      style={{ width: "56px", height: "56px" }}
                      src={yonalish2}
                    />
                    <p style={{ fontSize: "32px" }} className="p-0 m-0">
                      Ovqat
                    </p>
                  </div>
                  <Checkbox />
                </div>
              </div>

              <div className="col-lg-4">
                <div
                  style={{ border: "1px solid #525252" }}
                  className="d-flex align-items-center justify-content-between rounded p-2 mb-3"
                >
                  <div className="d-flex align-items-center gap-3 text-white">
                    <img
                      style={{ width: "56px", height: "56px" }}
                      src={yonalish3}
                    />
                    <p style={{ fontSize: "32px" }} className="p-0 m-0">
                      Ovqat
                    </p>
                  </div>
                  <Checkbox />
                </div>
              </div>

              <div className="col-lg-4">
                <div
                  style={{ border: "1px solid #525252" }}
                  className="d-flex align-items-center justify-content-between rounded p-2 mb-3"
                >
                  <div className="d-flex align-items-center gap-3 text-white">
                    <img
                      style={{ width: "56px", height: "56px" }}
                      src={yonalish4}
                    />
                    <p style={{ fontSize: "32px" }} className="p-0 m-0">
                      Ovqat
                    </p>
                  </div>
                  <Checkbox />
                </div>
              </div>

              <div className="col-lg-4">
                <div
                  style={{ border: "1px solid #525252" }}
                  className="d-flex align-items-center justify-content-between rounded p-2 mb-3"
                >
                  <div className="d-flex align-items-center gap-3 text-white">
                    <img
                      style={{ width: "56px", height: "56px" }}
                      src={yonalish5}
                    />
                    <p style={{ fontSize: "32px" }} className="p-0 m-0">
                      Ovqat
                    </p>
                  </div>
                  <Checkbox />
                </div>
              </div>

              <div className="col-lg-4">
                <div
                  style={{ border: "1px solid #525252" }}
                  className="d-flex align-items-center justify-content-between rounded p-2 mb-3"
                >
                  <div className="d-flex align-items-center gap-3 text-white">
                    <img
                      style={{ width: "56px", height: "56px" }}
                      src={yonalish6}
                    />
                    <p style={{ fontSize: "32px" }} className="p-0 m-0">
                      Ovqat
                    </p>
                  </div>
                  <Checkbox />
                </div>
              </div>
            </div>

            <div className="text-start">
              <p style={{ fontSize: "60px", color: "#FFFFFF" }}>Kutilayotgan</p>
            </div>
          </div>
        </div>
        <div
          className="my-5 container-fluid mx-auto"
          style={{ width: "100%", height: "300px" }}
        >
          <Swiper
            onSwiper={setSwiperRef}
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
              100: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              800: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            <SwiperSlide
              className="rounded position-relative"
              style={{ backgroundColor: "black" }}
            >
              <img className="rounded" src={kutish1} />
              <div
                style={{
                  position: "absolute",
                  bottom: "0%",
                  left: "55%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  fontSize: "24px",
                  fontWeight: "bold",
                  textAlign: "center",
                  width: "100%",
                }}
                className="text-start"
              >
                <p style={{ fontSize: "30px" }} className="p-0 m-0">
                  Devon Rodriguez
                </p>
                <p style={{ fontSize: "14px" }} className="p-0 m-0">
                  Odamlarni hayratlanadigan rasmlar yarating
                </p>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "10%",
                  right: "-20%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  fontSize: "16px",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                <span className="bg-white text-black rounded-pill p-1 px-3">
                  {" "}
                  2022 yil yozida
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="rounded position-relative"
              style={{ backgroundColor: "black" }}
            >
              <img className="rounded" src={kutish2} />
              <div
                style={{
                  position: "absolute",
                  bottom: "0%",
                  left: "55%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  fontSize: "24px",
                  fontWeight: "bold",
                  textAlign: "center",
                  width: "100%",
                }}
                className="text-start"
              >
                <p style={{ fontSize: "30px" }} className="p-0 m-0">
                  Devon Rodriguez
                </p>
                <p style={{ fontSize: "16px" }} className="p-0 m-0">
                  Odamlarni hayratlanadigan rasmlar yarating
                </p>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "10%",
                  right: "-20%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  fontSize: "16px",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                <span className="bg-white text-black rounded-pill p-1 px-3">
                  {" "}
                  2022 yil yozida
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="rounded position-relative"
              style={{ backgroundColor: "black" }}
            >
              <img className="rounded" src={kutish1} />
              <div
                style={{
                  position: "absolute",
                  bottom: "0%",
                  left: "55%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  fontSize: "24px",
                  fontWeight: "bold",
                  textAlign: "center",
                  width: "100%",
                }}
                className="text-start"
              >
                <p style={{ fontSize: "30px" }} className="p-0 m-0">
                  Devon Rodriguez
                </p>
                <p style={{ fontSize: "16px" }} className="p-0 m-0">
                  Odamlarni hayratlanadigan rasmlar yarating
                </p>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "10%",
                  right: "-20%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  fontSize: "16px",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                <span className="bg-white text-black rounded-pill p-1 px-3">
                  {" "}
                  2022 yil yozida
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="rounded position-relative"
              style={{ backgroundColor: "black" }}
            >
              <img className="rounded" src={kutish2} />
              <div
                style={{
                  position: "absolute",
                  bottom: "0%",
                  left: "55%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  fontSize: "24px",
                  fontWeight: "bold",
                  textAlign: "center",
                  width: "100%",
                }}
                className="text-start"
              >
                <p style={{ fontSize: "30px" }} className="p-0 m-0">
                  Devon Rodriguez
                </p>
                <p style={{ fontSize: "16px" }} className="p-0 m-0">
                  Odamlarni hayratlanadigan rasmlar yarating
                </p>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "10%",
                  right: "-20%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  fontSize: "16px",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                <span className="bg-white text-black rounded-pill p-1 px-3">
                  {" "}
                  2022 yil yozida
                </span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="text-center container-fluid mx-auto ">
          <p style={{ fontSize: "36 px" }} className="text-white">
            Foydalanuvchilarimizni biz haqimizdagi fikrlari
          </p>
          <Carousel
            className="text-center my-5"
            arrows
            infinite={false}
            style={{ textAlign: "center" }}
          >
            <div className="d-flex align-items-center justify-content-center">
              <div
                style={{
                  width: "385px",
                  backgroundColor: "#272C33",
                  zIndex: "1",
                }}
                className="p-2 px-5 rounded"
              >
                <p className="text-white">
                  Men Timbalend va Natali Portmandan juda ko'p narsalarni
                  o'rgandim. Bu menga bu imkoniyat eshigini ochib berdi. Men
                  bularni endi haqiqatan ham qila oladiganga o'xshayabman.
                </p>
                <p className="text-white text-start">
                  Robert{" "}
                  <span style={{ opacity: "60%" }}>O'zbekiston Toshkent</span>
                </p>
              </div>
              <div
                style={{ width: "200px", height: "250px", marginLeft: "-30px" }}
                className=""
              >
                <img className="w-100" src={carousel} />
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-center">
              <div
                style={{
                  width: "305px",
                  backgroundColor: "#272C33",
                  zIndex: "1",
                }}
                className="p-2 rounded"
              >
                <p className="text-white">
                  Men Timbalend va Natali Portmandan juda ko'p narsalarni
                  o'rgandim. Bu menga bu imkoniyat eshigini ochib berdi. Men
                  bularni endi haqiqatan ham qila oladiganga o'xshayabman.
                </p>
                <p className="text-white text-start">
                  Robert{" "}
                  <span style={{ opacity: "60%" }}>O'zbekiston Toshkent</span>
                </p>
              </div>
              <div
                style={{ width: "200px", height: "250px", marginLeft: "-30px" }}
                className=""
              >
                <img className="w-100" src={carousel} />
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-center">
              <div
                style={{
                  width: "305px",
                  backgroundColor: "#272C33",
                  zIndex: "1",
                }}
                className="p-2 rounded"
              >
                <p className="text-white">
                  Men Timbalend va Natali Portmandan juda ko'p narsalarni
                  o'rgandim. Bu menga bu imkoniyat eshigini ochib berdi. Men
                  bularni endi haqiqatan ham qila oladiganga o'xshayabman.
                </p>
                <p className="text-white text-start">
                  Robert{" "}
                  <span style={{ opacity: "60%" }}>O'zbekiston Toshkent</span>
                </p>
              </div>
              <div
                style={{ width: "200px", height: "250px", marginLeft: "-30px" }}
                className=""
              >
                <img className="w-100" src={carousel} />
              </div>
            </div>
          </Carousel>
        </div>

        <div className="row container-fluid mx-auto py-5 my-5">
          <div className="col-lg-4 col-md-6 col-12">
            <div
              className="text-center rounded-3 py-2 mb-4"
              style={{ backgroundColor: "#272C33" }}
            >
              <p
                className="p-0 m-0 fw-bold"
                style={{ color: "#FFFFFF", fontSize: "32px" }}
              >
                150+ kurslar
              </p>
              <p
                className="p-0 m-0"
                style={{ color: "#FFFFFF", fontSize: "14px" }}
              >
                Dunyodagi eng yaxshi ustozlardan
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div
              className="text-center rounded-3 py-2 mb-4"
              style={{ backgroundColor: "#272C33" }}
            >
              <p
                className="p-0 m-0 fw-bold"
                style={{ color: "#FFFFFF", fontSize: "32px" }}
              >
                20 daqiqa
              </p>
              <p
                className="p-0 m-0"
                style={{ color: "#FFFFFF", fontSize: "14px" }}
              >
                Har bir dars uchun o'rtacha
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div
              className="text-center rounded-3 py-2 mb-4"
              style={{ backgroundColor: "#272C33" }}
            >
              <p
                className="p-0 m-0 fw-bold"
                style={{ color: "#FFFFFF", fontSize: "32px" }}
              >
                20 ta dars
              </p>
              <p
                className="p-0 m-0"
                style={{ color: "#FFFFFF", fontSize: "14px" }}
              >
                Har bir kurs uchun o'rtacha
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
