import { Navbar } from "../navbar";
import photo1 from "../image/photo1.png";
import logo2 from "../image/logo2.png";
import logo3 from "../image/logo3.png";
import chiziq1 from "../image/chiziq1.png";
import chiziq2 from "../image/chiziq2.png";
import chiziq3 from "../image/chiziq3.png";
import chiziq4 from "../image/chiziq4.png";
import photo2 from "../image/photo2.png";
import photo3 from "../image/photo3.png";
import photo4 from "../image/photo4.png";
import photo5 from "../image/photo5.png";
import portret1 from "../image/portret1.png";
import portret2 from "../image/portret2.png";
import portret3 from "../image/portret3.png";
import portret4 from "../image/portret4.png";
import portret5 from "../image/portret5.png";
import portret6 from "../image/portret6.png";
import portret7 from "../image/portret7.png";
import portret8 from "../image/portret8.png";
import petra from "../image/petra.png";
import portret9 from "../image/portret9.png";
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
import carousel from "../image/carousel.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Carousel, Checkbox, Modal } from "antd";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { CaretRightOutlined, CheckSquareOutlined, CrownOutlined, FieldTimeOutlined, FileOutlined, QuestionCircleOutlined, TabletOutlined, YoutubeOutlined } from "@ant-design/icons";
import { Popover, Steps } from "antd";
import { Footer } from "../footer";
import { useState } from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router";
export const PhotoPage = () => {
  const customDot = (dot, { status, index }) => (
    <Popover
      content={
        <span>
          step {index} status: {status}
          <div className="text-start">
            <img src={photo2} />
            <div className="bg-white p-1">
              <p style={{ fontSize: "10px" }} className="p-0 m-0">
                {index + 1}-qism
              </p>
              <p style={{ fontSize: "14px" }} className="p-0 m-0 fw-bold">
                Ilhom uchun tayorlanish
              </p>
            </div>
          </div>
        </span>
      }
    >
      {dot}
    </Popover>
  );
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (                       
    <>
      <div style={{ background: "#FFFFF2" }} className="mx-auto p-0 m-0">
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid mx-auto">
            <img
            onClick={() => {navigate('/')}}
              style={{ width: "147px", height: "32px", color: "black",cursor:"pointer" }}
              src={logo2}
              alt="#"
            />
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                  <a
                    style={{ color: "#000000", fontSize: "20px" }}
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Kategoriyalar
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="d-flex align-items-center gap-3">
                <input
                  className="p-2 rounded-5"
                  style={{ color: "#000000", border: "black" }}
                  placeholder="Search"
                />
                <button
                onClick={()=>{navigate('/cabinet')}}
                  style={{ color: "#000000", fontSize: "20px" }}
                  className="btn bg-transparent border-0 d-flex gap-2 align-items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-box-arrow-in-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
                    />
                  </svg>
                  Kirish
                </button>
              </div>
            </div>
          </div>
        </nav>

        <Modal
          footer={null}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div className="row">
            <div className="col-lg-8 col-12">
              <ReactPlayer
                url={"https://www.youtube.com/watch?v=hRQWc_47kgE&t=12s"}
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="col-lg-4 col-12">
              <div className="d-flex align-items-center justify-content-between">
                <span style={{ fontSize: "14px" }}>299 000UZS</span>
                <span style={{ fontSize: "12px" }}>299 000UZS</span>
                <span style={{ fontSize: "16px" }}>Chegirma 16%</span>
              </div>
              <p style={{color:"#E32652"}}><FieldTimeOutlined style={{marginRight:"8px"}} />Bu narx yana 1 kunga amal qiladi!</p>
              <button style={{background:"#E32652"}} className="text-white btn w-100">Savatga qo'shish</button>
              <button className="btn border w-100 mt-4">Hoziroq harid qilish</button> 
              <p className="mt-4">Pulni qaytarish kafolati - 30 kun</p>
              <p style={{fontSize:"18px"}} className="fw-bold">Ushbu kurs quyidagilarni o'z chiga oladi:</p>

              <div>
                <p className="p-0 m-0"><YoutubeOutlined style={{marginRight:"8px"}}/>Talab bo'yicha 32 soatlik video</p>
                <p className="p-0 m-0"><FileOutlined style={{marginRight:"8px"}}/>8 ta maqola</p>
                <p className="p-0 m-0"><QuestionCircleOutlined style={{marginRight:"8px"}}/>1 ta amaliy test</p>
                <p className="p-0 m-0"><CaretRightOutlined style={{marginRight:"8px"}}/>To'liq umr bo'yi kirish</p>
                <p className="p-0 m-0"><TabletOutlined style={{marginRight:"8px"}} />Mobil qurilmalar va televizor orqali kirish</p>
                <p className="p-0 m-0"><CrownOutlined style={{marginRight:"8px"}} />Tugatish sertifikati</p>
              </div>
            </div>
          </div>
        </Modal>

        <div className="row container mx-auto">
          <div className="col-lg-6">
            <img className="w-100" src={photo1} alt="#" />
          </div>
          <div className="col-lg-6">
            <div className="text-center px-4 position-relative">
              <img
                src={chiziq1}
                style={{ top: "-15%" }}
                className="position-absolute start-0 "
              />
              <p style={{ fontSize: "32px" }} className="">
                FOTOSURAT ORQALI O'Z KO'RGANLARINGIZNI TASVIRLANG
              </p>
              <div
                className="mx-auto"
                style={{ width: "40px", height: "6px", background: "#E32652" }}
              ></div>
              <p style={{ fontSize: "24px" }}>Petra kolinz</p>
              <p style={{ fontSize: "16px" }}>
                Taniqli rassom Petra Kollinzning amaliy ko'rsatmalari bilan har
                doim o'zingizni tasavvur qilgan fotografga aylaning. 30 kun
                ichida siz o'zingizning tasavvuringizni aks ettiruvchi original
                fotoseriyani suratga olasiz.
              </p>
              <div className="d-flex align-items-center justify-content-between gap-3">
                <div className="border p-3 rounded-3 d-flex align-items-center gap-3 flex-column h-100">
                  <p
                    style={{ fontSize: "12px", color: "#00000099" }}
                    className="p-0 m-0"
                  >
                    Boshlanish sanasi
                  </p>
                  <p className="p-0 m-0">2 avgust</p>
                </div>
                <div className="border p-3 rounded-3 d-flex align-items-center gap-3 flex-column">
                  <p
                    style={{ fontSize: "12px", color: "#00000099" }}
                    className="p-0 m-0"
                  >
                    Ro'yxatdan o'tish tez orada tuganydi. Hoziroq joy band
                    qilinglishni...
                  </p>
                  <button
                    onClick={showModal}
                    style={{ background: "#E32652", fontSize: "12px" }}
                    className="btn w-100 text-white "
                  >
                    Harid qilish
                  </button>
                </div>
              </div>
              <p style={{ fontSize: "12px", color: "#00000099" }}>
                Barcha sinflar va sessiyalar uchun oyiga $15 dan (har yili
                to'lanadi).
              </p>
            </div>
          </div>
        </div>
        <div style={{ background: "#F9F8E9" }} className="container-fluid mx-auto">
          <div className="row py-2">
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <p style={{ fontSize: "12px" }} className="p-0 m-0">
                <CheckSquareOutlined style={{ marginRight: "8px" }} />
                Natijalar
              </p>
              <p style={{ fontSize: "16px" }} className="p-0 m-0">
                Original foto seriyasi
              </p>
              <p className="p-0 m-0" style={{ fontSize: "8px" }}>
                O'zingiz g'ururlanadigan bilimlarga erishish uchun loyihalar
                bo'yicha bosqichma-bosqich ko'rsatmalar bilan mahoratingizni
                oshiring
              </p>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <p style={{ fontSize: "12px" }} className="p-0 m-0">
                <CheckSquareOutlined style={{ marginRight: "8px" }} />
                Tuzilishi
              </p>
              <p style={{ fontSize: "16px" }} className="p-0 m-0">
                Moslashuvchan 30 kunlik o'quv dasturi
              </p>
              <p className="p-0 m-0" style={{ fontSize: "8px" }}>
                Biz sinfni 30 kundan ortiq yoki sizning xohishingiz bo'yicha
                bajarish uchun boshqariladigan harakatlarga ajratamiz.
              </p>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <p style={{ fontSize: "12px" }} className="p-0 m-0">
                <CheckSquareOutlined style={{ marginRight: "8px" }} />
                Jamiyat
              </p>
              <p style={{ fontSize: "16px" }} className="p-0 m-0">
                Fikr va munozaralar
              </p>
              <p className="p-0 m-0" style={{ fontSize: "8px" }}>
                Fikr-mulohaza olish va boshqalar baham ko'rgan narsadan ilhom
                olish uchun tengdoshlar va o'qituvchi yordamchilari
                hamjamiyatiga kiring.
              </p>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <p style={{ fontSize: "12px" }} className="p-0 m-0">
                <CheckSquareOutlined style={{ marginRight: "8px" }} />
                Qiyinchilik
              </p>
              <p style={{ fontSize: "16px" }} className="p-0 m-0">
                Barcha darajalar
              </p>
              <p className="p-0 m-0" style={{ fontSize: "8px" }}>
                Ushbu sessiya yangi boshlanuvchilar uchun qulay va ko'proq
                tajribaga ega bo'lganlar uchun ilg'or texnikaga ega.
              </p>
            </div>
          </div>
        </div>

        <div
          style={{ boxShadow: "0px 0px 12px 0px #0000001A" }}
          className="d-flex align-items-center gap-5 container mx-auto flex-wrap bg-white py-2 px-5 my-5 rounded-4"
        >
          <div className="">
            <img className="w-100" src={logo3} />
          </div>
          <div>
            <p
              style={{ color: "#000000", fontSize: "18px" }}
              className="p-0 m-0"
            >
              Seanslar MasterClass obunasi bilan birga keladi
            </p>
            <p
              style={{ fontSize: "14px", color: "#000000" }}
              className="p-0 m-0"
            >
              100 dan ortiq o'qituvchilarga cheksiz kirish • Har oy yangi
              darslar qo'shiladi • Ish stolida, televizorda va telefonda tomosha
              qiling
            </p>
            <p
              style={{ fontSize: "12px", color: "#000000" }}
              className="p-0 m-0"
            >
              Hozirda ish stoli va iOS-da mavjud.
            </p>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-center mx-auto">
          <div
            className="position-relative"
            style={{ display: "inline-block", marginBottom: "120px" }}
          >
            <p className="p-0 m-0 " style={{ fontSize: "40px" }}>
              Tuzilgan o'quv dasturi bilan yangi ko'nikmalarni oching
            </p>
            <img
              className="position-absolute start-0"
              style={{ width: "143px", height: "70px" }}
              src={chiziq2}
            />
          </div>
        </div>

        <Steps
          current={5}
          progressDot={customDot}
          className="container mx-auto"
          items={[
            {
              title: (
                <div className="text-start">
                  <img src={photo2} />
                  <div className="bg-white p-1">
                    <p style={{ fontSize: "10px" }} className="p-0 m-0">
                      1-qism
                    </p>
                    <p style={{ fontSize: "14px" }} className="p-0 m-0 fw-bold">
                      Ilhom uchun tayorlanish
                    </p>
                  </div>
                </div>
              ),
            },
            {
              title: (
                <div className="text-start">
                  <img src={photo3} />
                  <div className="bg-white p-1">
                    <p style={{ fontSize: "10px" }} className="p-0 m-0">
                      1-qism
                    </p>
                    <p style={{ fontSize: "14px" }} className="p-0 m-0 fw-bold">
                      Ilhom uchun tayorlanish
                    </p>
                  </div>
                </div>
              ),
            },
            {
              title: (
                <div className="text-start">
                  <img src={photo4} />
                  <div className="bg-white p-1">
                    <p style={{ fontSize: "10px" }} className="p-0 m-0">
                      1-qism
                    </p>
                    <p style={{ fontSize: "14px" }} className="p-0 m-0 fw-bold">
                      Ilhom uchun tayorlanish
                    </p>
                  </div>
                </div>
              ),
            },
            {
              title: (
                <div className="text-start">
                  <img src={photo5} />
                  <div className="bg-white p-1">
                    <p style={{ fontSize: "10px" }} className="p-0 m-0">
                      1-qism
                    </p>
                    <p style={{ fontSize: "14px" }} className="p-0 m-0 fw-bold">
                      Ilhom uchun tayorlanish
                    </p>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <div className="text-center my-5 py-5 mx-auto">
          <p style={{ fontSize: "40px" }} className="p-0 m-0">
            To'liq o'quv dasturini o'rganing
          </p>
          <p style={{ fontSize: "16px" }} className="p-0 m-0">
            Batafsil ma'lumot olish uchun Sessiyaning umumiy ko'rinishini
            tomosha qiling.
          </p>
          <img src={chiziq3} className="my-3" /> <br />
          <button style={{ background: "#E32652" }} className="btn text-white">
            <CaretRightOutlined style={{ marginRight: "8px" }} /> Kurs haqida
            qisqacha
          </button>
        </div>

        <div className="text-center container mx-auto">
          <p style={{ fontSize: "40px" }}>Ushbu Kursimizdagi loyihalar</p>
          <div className="row mt-5">
            <div className="col-lg-4 mb-4">
              <img className="w-100" src={portret1} />
              <div className="text-start">
                <p className="fw-bold">Portret olishni o’rganing</p>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <img className="w-100" src={portret2} />
              <div className="text-start">
                <p className="fw-bold">O’z ilhomingizni toping</p>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <img className="w-100" src={portret3} />
              <div className="text-start">
                <p className="fw-bold">Tabiiy yorug'likdan foydalaning</p>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <img className="w-100" src={portret4} />
              <div className="text-start">
                <p className="fw-bold">Manba yoritgichidan foydalaning</p>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <img className="w-100" src={portret5} />
              <div className="text-start">
                <p className="fw-bold">Fotosuratlar seriyasini yarating</p>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <img className="w-100" src={portret6} />
              <div className="text-start">
                <p className="fw-bold">Fotosuratlar seriyasini yarating</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center container mx-auto">
          <p className="fw-bold" style={{ fontSize: "40px" }}>
            O'qituvchingiz bilan tanishing
          </p>
          <img className="w-100" src={chiziq4} />
          <div className="d-flex text-start mt-5">
            <div className="w-100">
              <img className="rounded-4" src={photo4} />
            </div>
            <div
              style={{
                boxShadow: "0px 4px 16px 0px #0000001F",
                marginLeft: "-150px",
                marginTop: "80px",
              }}
              className="w-100 h-100 px-5  bg-white rounded-4"
            >
              <div className="">
                <img className="w-100" src={petra} />
              </div>
              <p
                style={{ maxWidth: "395px", fontSize: "10px" }}
                className="p-0 mt-3"
              >
                Taniqli rassom Petra Kollinz o'zining orzu-havasli, hissiyotli
                suratlari bilan mashhur. Uning injiq uslubi ayollik, o'ziga
                xoslik va zaiflik nuanslarini o'rganish bilan birga badiiy
                tendentsiyalarga ta'sir ko'rsatdi. O'z sessiyasida Petra
                kamerangiz yordamida o'zingizni ifoda etishingizga yordam berish
                uchun o'zining noyob tajribasidan foydalanadi.
              </p>
            </div>
          </div>
        </div>

        <div className="row container mx-auto mt-5">
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <img className="w-100" src={portret7} />
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <img className="w-100" src={portret8} />
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <img className="w-100" src={portret9} />
          </div>
        </div>

        <div className="text-center mx-auto mt-5">
          <p style={{ fontSize: "40px" }} className="fw-bold">
            Darslarni boshlashga tayyormisiz?
          </p>
          <button
            className="btn text-white px-5"
            style={{ background: "#E32652" }}
          >
            Kursni boshlash
          </button>
        </div>

        <div className="bg-black mx-auto container-fluid">
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
          <div className="text-center mx-auto">
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
                  spaceBetween: 0,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 0,
                },
                1250: {
                  slidesPerView: 4,
                  spaceBetween: 0,
                },
              }}
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
                    className="w-100 object-fit-cover"
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

            <div className="row my-5 mx-auto">
              <div className="col-lg-4 col-md-6 col-12">
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

              <div className="col-lg-4 col-md-6 col-12">
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

              <div className="col-lg-4 col-md-6 col-12">
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

              <div className="col-lg-4 col-md-6 col-12">
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

              <div className="col-lg-4 col-md-6 col-12">
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

              <div className="col-lg-4 col-md-6 col-12">
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
                  style={{
                    width: "200px",
                    height: "250px",
                    marginLeft: "-30px",
                  }}
                  className=""
                >
                  <img className="w-100" src={carousel} />
                </div>
              </div>

              <div className="d-flex align-items-center justify-content-center mx-auto">
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
                  style={{
                    width: "200px",
                    height: "250px",
                    marginLeft: "-30px",
                  }}
                  className=""
                >
                  <img className="w-100" src={carousel} />
                </div>
              </div>

              <div className="d-flex align-items-center justify-content-center mx-auto">
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
                  style={{
                    width: "200px",
                    height: "250px",
                    marginLeft: "-30px",
                  }}
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
                className="text-center rounded-3 py-2 mb-3"
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
                className="text-center rounded-3 py-2 mb-3"
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
                className="text-center rounded-3 py-2 mb-3"
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
    </>
  );
};
