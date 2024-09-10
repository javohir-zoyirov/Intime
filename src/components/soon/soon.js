import { Navbar } from "../navbar";
import kutish1 from "../image/kutilayotgan1.png";
import kutish2 from "../image/kutilayotgan2.png";
import soon1 from "../image/soon1.png";
import soon2 from "../image/soon2.png";
import soon3 from "../image/soon3.png";
import soon4 from "../image/soon4.png";
import soon5 from "../image/soon5.png";
import soon6 from "../image/soon6.png";
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
import carousel from "../image/carousel.png"
import { Footer } from "../footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Carousel, Checkbox } from "antd";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { useState } from "react";


export const Soon = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className="bg-black">
      <Navbar />
      <div className="text-center">
        <p style={{ fontSize: "100px" }} className="fw-bold text-white">
          <span style={{ color: "#E32652" }}>TEZ KUNDA</span> InTimeda
        </p>
        <div
          style={{ background: "#E32652", width: "32px", height: "8px" }}
          className="mx-auto"
        ></div>
        <p style={{ maxWidth: "450px" }} className="text-white mx-auto mt-5">
          Har oy kutubxonamizga biznes, oziq-ovqat, koʻngilochar va boshqa
          sohalardagi eng yirik nomlarni qoʻshmoqdamiz. Mana, bizning ortib
          borayotgan o'qituvchilar ro'yxatiga qo'shilgan ba'zi rassomlar,
          yetakchilar va motivatorlar.
        </p>

        <p
          style={{ color: "#E32652", fontSize: "32px", lineHeight: "48px" }}
          className="fw-bold p-0 m-0"
        >
          In Time
        </p>

        <div className="d-flex align-items-center justify-content-center gap-0 mx-auto">
          <div
            style={{ width: "153.01px", height: "1px", background: "#FFFFFF" }}
          ></div>
          <p style={{ color: "#FFFFFF", fontSize: "14px" }} className="p-0 m-0">
            PRESENTS
          </p>
          <div
            style={{ width: "153.01px", height: "1px", background: "#FFFFFF" }}
          ></div>
        </div>

        <div className="my-5">
          <p
            className="text-white py-3"
            style={{
              fontSize: "48px",
              display: "inline",
              borderBottom: "1px solid #FFFFFF",
            }}
          >
            THE HUMO ARENA
          </p>
        </div>

        <div style={{ maxWidth: "380px" }} className="mx-auto">
          <p className="text-white">
            Eng kuchli ofisga misli ko'rilmagan kirish huquqiga ega bo'ling.
          </p>
          <p className="text-white">
            O'zbekistondagi eng kuchli va ajoyib Masterlardan talim oling va
            o'rganing.
          </p>
        </div>
      </div>

      <div className="row container-fluid mx-auto mt-5">
        <div className="col-lg-6">
          <div
            className="rounded position-relative mb-4"
            style={{ backgroundColor: "black" }} 
          >
            <img className="rounded w-100" src={soon1} />
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
          </div>
        </div>
        <div className="col-lg-6">
          <div
            className="rounded position-relative mb-4"
            style={{ backgroundColor: "black" }}
          >
            <img className="rounded w-100" src={soon2} />
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
          </div>
        </div>
        <div className="col-lg-6">
          <div
            className="rounded position-relative mb-4"
            style={{ backgroundColor: "black" }}
          >
            <img className="rounded w-100" src={soon3} />
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
          </div>
        </div>
        <div className="col-lg-6">
          <div
            className="rounded position-relative mb-4"
            style={{ backgroundColor: "black" }}
          >
            <img className="rounded w-100" src={soon4} />
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
          </div>
        </div>
        <div className="col-lg-6">
          <div
            className="rounded position-relative mb-4"
            style={{ backgroundColor: "black" }}
          >
            <img className="rounded w-100" src={soon5} />
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
          </div>
        </div>
        <div className="col-lg-6">
          <div
            className="rounded position-relative mb-4"
            style={{ backgroundColor: "black" }}
          >
            <img className="rounded w-100" src={soon6} />
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
                2022 yil yozida
              </span>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div
            className="rounded position-relative mb-4"
            style={{ backgroundColor: "black" }}
          >
            <img className="rounded w-100" src={kutish1} />
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
          </div>
        </div>
        <div className="col-lg-6">
          <div
            className="rounded position-relative mb-4"
            style={{ backgroundColor: "black" }}
          >
            <img className="rounded w-100   " src={kutish2} />
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
          </div>
        </div>
      </div>

      <div className="d-flex align-items-end gap-4 mt-5 py-5">
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
              slidesPerView={4}
              spaceBetween={0}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide style={{ backgroundColor: "black" }}>
                <div
                  style={{
                    width: "300px",
                    height: "579px",
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
              <SwiperSlide style={{ backgroundColor: "black" }}>
                <div
                  style={{
                    width: "300px",
                    height: "579px",
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
              <SwiperSlide style={{ backgroundColor: "black" }}>
                <div
                  style={{
                    width: "300px",
                    height: "579px",
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
              <SwiperSlide style={{ backgroundColor: "black" }}>
                <div
                  style={{
                    width: "300px",
                    height: "579px",
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
              <SwiperSlide style={{ backgroundColor: "black" }}>
                <div
                  style={{
                    width: "300px",
                    height: "579px",
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
          </div>

        <div className="text-center container-fluid mx-auto ">
          <p style={{ fontSize: "48px" }} className="text-white">
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
          <div className="col-lg-4">
            <div
              className="text-center rounded-3 py-2"
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
          <div className="col-lg-4">
            <div
              className="text-center rounded-3 py-2"
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
          <div className="col-lg-4">
            <div
              className="text-center rounded-3 py-2"
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
  );
};
