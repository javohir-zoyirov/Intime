import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  ToTopOutlined,
} from "@ant-design/icons";
import { Footer } from "../footer";
import bgkurs from "../image/bg-kurs.png";
import { Navbar } from "../navbar";
import "./aboutKurs.css";
import ReactPlayer from "react-player";
import { useState } from "react";
import { Flex, Menu, Progress, Rate } from "antd";
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
import carousel from "../image/carousel.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Carousel, Checkbox } from "antd";
import { FreeMode, Navigation, Pagination } from "swiper/modules";

const items = [
  {
    key: "sub1",
    label: (
      <p className="text-white p-0 m-0">1. O'qituvchingiz bilan tanishing</p>
    ),
    icon: <MailOutlined style={{ color: "white" }} />,
    children: [
      {
        key: "1",
        label: "Option 1",
      },
      {
        key: "2",
        label: "Option 2",
      },
      {
        key: "3",
        label: "Option 3",
      },
      {
        key: "4",
        label: "Option 4",
      },
    ],
  },
  {
    key: "sub2",
    label: <p className="text-white p-0 m-0">2. Ovoz bilan ishlab chiqish</p>,
    icon: <AppstoreOutlined style={{ color: "white" }} />,
    children: [
      {
        key: "5",
        label: "Option 5",
      },
      {
        key: "6",
        label: "Option 6",
      },
      {
        key: "sub3",
        label: "Submenu",
        children: [
          {
            key: "7",
            label: "Option 7",
          },
          {
            key: "8",
            label: "Option 8",
          },
        ],
      },
    ],
  },
  {
    key: "sub3",
    label: (
      <p className="text-white p-0 m-0">3. Lirizm: Haqiqat haqida kuylang</p>
    ),
    icon: <SettingOutlined style={{ color: "white" }} />,
    children: [
      {
        key: "9",
        label: "Option 9",
      },
      {
        key: "10",
        label: "Option 10",
      },
      {
        key: "11",
        label: "Option 11",
      },
      {
        key: "12",
        label: "Option 12",
      },
    ],
  },

  {
    key: "sub4",
    label: (
      <p className="text-white p-0 m-0">4. Namunali kuylashni o'rganish</p>
    ),
    icon: <SettingOutlined style={{ color: "white" }} />,
    children: [
      {
        key: "9",
        label: "Option 9",
      },
      {
        key: "10",
        label: "Option 10",
      },
      {
        key: "11",
        label: "Option 11",
      },
      {
        key: "12",
        label: "Option 12",
      },
    ],
  },
  {
    key: "sub5",
    label: <p className="text-white p-0 m-0">5. Fon vokal, 1-qism</p>,
    icon: <SettingOutlined style={{ color: "white" }} />,
    children: [
      {
        key: "9",
        label: "Option 9",
      },
      {
        key: "10",
        label: "Option 10",
      },
      {
        key: "11",
        label: "Option 11",
      },
      {
        key: "12",
        label: "Option 12",
      },
    ],
  },
  {
    key: "sub6",
    label: <p className="text-white p-0 m-0">6. Fon vokal, 2-qism</p>,
    icon: <SettingOutlined style={{ color: "white" }} />,
    children: [
      {
        key: "9",
        label: "Option 9",
      },
      {
        key: "10",
        label: "Option 10",
      },
      {
        key: "11",
        label: "Option 11",
      },
      {
        key: "12",
        label: "Option 12",
      },
    ],
  },
  {
    key: "sub6",
    label: (
      <p className="text-white p-0 m-0">
        7. Ovozingizga g’amxo’rlik qilishni o’rganing
      </p>
    ),
    icon: <SettingOutlined style={{ color: "white" }} />,
    children: [
      {
        key: "9",
        label: "Option 9",
      },
      {
        key: "10",
        label: "Option 10",
      },
      {
        key: "11",
        label: "Option 11",
      },
      {
        key: "12",
        label: "Option 12",
      },
    ],
  },
];

export const AboutKurs = () => {
  const [current, setCurrent] = useState("1");
  const [status, setStatus] = useState('about');
  return (
    <div className="bg-black">
      <Navbar />
      <div className="nav">
        <div className="text-center mx-auto">
          <p
            style={{ paddingTop: "200px", fontSize: "50px" }}
            className="text-white fw-bold"
          >
            Mariah <br /> Carey
          </p>
          <p style={{ fontSize: "32px" }} className="text-white p-0">
            Ovozni asbob sifatida o'rgatadi.
          </p>
          <p
            style={{ fontSize: "20px", maxWidth: "950px" }}
            className="text-white "
          >
            Mariah Carey o'z jarayonini baham ko'rish uchun sizni o'z
            studiyasiga taklif qiladi. U o'z tasavvurini yaratish, hamkorlik
            qilish va ifodalash uchun o'zining ajoyib ovozidan qanday
            foydalanishini bilib oling.
          </p>
          <div className="d-flex align-items-center justify-content-center py-4 gap-5 text-white">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-play-fill"
                viewBox="0 0 16 16"
              >
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
              </svg>
              <p style={{ fontSize: "20px" }}>TREYLER</p>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-stack"
                viewBox="0 0 16 16"
              >
                <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.6.6 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.6.6 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.6.6 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535z" />
                <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.6.6 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0z" />
              </svg>
              <p style={{ fontSize: "20px" }}>KURS HAQIDA</p>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-arrow-bar-up"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5m-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5"
                />
              </svg>
              <p style={{ fontSize: "20px" }}>BAHAM KO'RISH</p>
            </div>
          </div>
        </div>
      </div>

      <p
        style={{ fontSize: "48px", color: "white" }}
        className="pt-5 container-fluid mx-auto"
      >
        Ushbu kurs haqida
      </p>

      <div className="row container-fluid mx-auto">
        <div className="col-lg-7">
          <ReactPlayer
            width={"100%"}
            url={"https://www.youtube.com/watch?v=hRQWc_47kgE"}
          />
        </div>
        <div className="col-lg-5">
          <div className="text-white">
            <p style={{ fontSize: "24px" }} className="p-0 m-0">
              Dars rejasini ko'rib chiqish
            </p>
            <Menu
              style={{
                width: "100%",
                color: "white",
                background: "#14161A",
              }}
              defaultOpenKeys={[""]}
              selectedKeys={[current]}
              mode="inline"
              items={items}
            />
          </div>
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-center my-5">
        <div
        onClick={() => setStatus("about")}
          style={  status === "about" ?{ borderBottom: "4px solid #E32652", cursor: "pointer" } : { borderBottom: "2px solid #FFFFFF66", cursor: "pointer" }}
          className="text-white px-3 pb-1"
        >
          Kurs haqida
        </div>
        <div
        onClick={() => setStatus("degree")}
        style={  status === "degree" ?{ borderBottom: "4px solid #E32652", cursor: "pointer" } : { borderBottom: "2px solid #FFFFFF66", cursor: "pointer" }}
          className="text-white px-3 pb-1"
        >
          Daraja
        </div>
        <div
        onClick={() => setStatus("comment")}
        style={  status === "comment" ? { borderBottom: "4px solid #E32652", cursor: "pointer" } : { borderBottom: "2px solid #FFFFFF66", cursor: "pointer" }}

          className="text-white px-3 pb-1"
        >
          Sharx
        </div>
      </div>
      { status === "about" ? <div style={{ background: "#14161A", overflowX:"scroll" }} className="container-fluid p-5">
  <p className="text-white">Ushbu kurs haqida</p>
  <p
    className="text-white pb-3 m-0"
    style={{ borderBottom: " 1px solid #CFD1D4" }}
  >
    Blockchain va Cryptocurrencies qanday ishlashini, ularning
    istiqbollari va xavflarini bilib oling
  </p>
  <div
    className="d-flex py-3"
    style={{ minWidth: "800px", gap: "300px", borderBottom: " 1px solid #CFD1D4" }}
  >
    <p className="text-white p-0 m-0">Tafsilotlar</p>
    <div>
      <p style={{ color: "#FFFFFF" }} className="p-0 m-0">
        <span style={{ opacity: "60%" }}>O'qituvchi (lar):</span> Mariah Carey
      </p>
      <p style={{ color: "#FFFFFF" }} className="p-0 m-0">
        <span style={{ opacity: "60%" }}>Kategoriya: </span> Musiqa
      </p>
    </div>
  </div>

  <div
    className="d-flex py-3"
    style={{ minWidth: "800px", gap: "300px", borderBottom: "1px solid #CFD1D4" }}
  >
    <p className="text-white p-0 m-0">Xususiyatlari</p>
    <p className="text-white p-0 m-0">
      <span className="fw-bold">iOS</span> va <span className="fw-bold">Android</span>da mavjud
    </p>
  </div>

  <div className="d-flex pb-1 pt-0" style={{ minWidth: "800px", gap: "300px" }}>
    <p className="text-white">Tavsif</p>
    <p className="text-white">
      Besh oktava diapazoni va baland hushtak ohanglari bilan Mariah Keri "Songbird Supreme" sifatida hukmronlik qiladi. Endi u birinchi marta sizga o'zining ijodiy jarayonini ko'rsatish uchun o'z studiyasini ochmoqda. U qo'shiq yozish, hamkorlik qilish va prodyuserlik qilish uchun uning ajoyib ovozidan qanday foydalanishini bilib oling va uning eng yirik hitlari qanday yaratilganini bilib oling. Mariahning sayohatidan ilhom oling va o'z ovozingiz va ko'rish kuchingiz bilan bog'laning.
    </p>
  </div>
</div>
 : status === "degree" ? <div
        style={{ background: "#14161A", overflowX:"scroll"  }}
        className="container mx-auto p-5 mt-5"
      >
        <p style={{ fontSize: "32px" }} className="text-white">
          Talabalarning baxolashi.
        </p>
        <div className="d-flex align-items-center gap-5">
          <div>
            <p
              style={{ fontSize: "100px", color: "#FFBD13" }}
              className="p-0 m-0"
            >
              4.4
            </p>
            <Rate
              style={{ fontSize: "30px", color: "#FFBD13" }}
              defaultValue={4}
            />
            <p
              style={{ fontSize: "25px", color: "#FFBD13" }}
              className="p-0 m-0"
            >
              Kurs reytingi
            </p>
          </div>
          <div>
            <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
              <Flex>
                <Progress
                  percent={100}
                  percentPosition={{
                    align: "center",
                    type: "inner",
                  }}
                  size={[400, 20]}
                />
              </Flex>
              <Rate disabled defaultValue={5} />
            </div>
            <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
              <Flex>
                <Progress
                  percent={80}
                  percentPosition={{
                    align: "center",
                    type: "inner",
                  }}
                  size={[400, 20]}
                />
              </Flex>
              <Rate disabled defaultValue={4} />
            </div>
            <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
              <Flex>
                <Progress
                  percent={75}
                  percentPosition={{
                    align: "center",
                    type: "inner",
                  }}
                  size={[400, 20]}
                />
              </Flex>
              <Rate disabled defaultValue={3.5} />
            </div>
            <div className="d-flex align-items-center justify-content-between gap-2">
              <Flex>
                <Progress
                  percent={60}
                  percentPosition={{
                    align: "center",
                    type: "inner",
                  }}
                  size={[400, 20]}
                />
              </Flex>
              <Rate disabled defaultValue={3} />
            </div>
          </div>
        </div>
      </div> : status === "comment" ? <div
        style={{ background: "#14161A", overflowX:"scroll"  }}
        className="container mx-auto p-5 mt-5"
      >
        
        <div className="row">
          <div className="col-lg-8">
          <p style={{ fontSize: "40px" }} className="text-white">
          Sharh
        </p>
            <div className="d-flex align-items-center justify-content-between pe-5">
            
              <p style={{ fontSize: "24px" }} className="p-0 m-0 text-white">
                {" "}
                It was A Great Experience
              </p>
              <Rate disabled style={{ color: "#F68632" }} defaultValue={5} />
            </div>
            <p style={{ fontSize: "16px", color: "white" }} className="pe-5">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
              ipsum in elementum nunc, commodo pharetra. Rutrum cras neque
              egestas dictumst aliquam consequat faucibus est mattis. Pulvinar
              semper ipsum urna, tortor molestie ut. Diam ligula magna pharetra
              risus. Cras congue dignissim cursus commodo arcu. Nisi elementum
              dictum facilisis aenean vitae risus pharetra faucibus purus.
              Suspendisse at auctor faucibus etiam varius. Tristique duis luctus
              neque, elementum aenean vel mattis at eget.
            </p>
          </div>
          <div className="col-lg-4">
            <div
              style={{ boxShadow: "0px 0px 8px 0px #00B2F529" }}
              className="d-flex align-items-center justify-content-between p-2 rounded-4 px-3 mb-3"
            >
              <img
                style={{ width: "72px", height: "72px" }}
                className="rounded-pill object-fit-cover"
                src="https://naacp.org/sites/default/files/styles/hero_desktop/public/images/iStock-970974446.jpg.webp?itok=CRjsK8ZA"
              />
              <div>
                <div className="d-flex align-items-center justify-content-between">
                  <p className="p-0 m-0 text-white">Stive Jobs</p>
                  <div className="d-flex align-items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      class="bi bi-star-fill"
                      viewBox="0 0 16 16"
                      color="#F68632"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <p className="p-0 m-0 text-white">4.5</p>
                  </div>
                </div>
                <p
                  style={{ color: "#FFFFFF", opacity: "60%" }}
                  className="p-0 m-0"
                >
                  It was A Great Experience
                </p>
              </div>
            </div>
            <div
              style={{ boxShadow: "0px 0px 8px 0px #00B2F529" }}
              className="d-flex align-items-center justify-content-between p-2 rounded-4 px-3 mb-3"
            >
              <img
                style={{ width: "72px", height: "72px" }}
                className="rounded-pill object-fit-cover"
                src="https://naacp.org/sites/default/files/styles/hero_desktop/public/images/iStock-970974446.jpg.webp?itok=CRjsK8ZA"
              />
              <div>
                <div className="d-flex align-items-center justify-content-between">
                  <p className="p-0 m-0 text-white">Stive Jobs</p>
                  <div className="d-flex align-items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      class="bi bi-star-fill"
                      viewBox="0 0 16 16"
                      color="#F68632"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <p className="p-0 m-0 text-white">4.5</p>
                  </div>
                </div>
                <p
                  style={{ color: "#FFFFFF", opacity: "60%" }}
                  className="p-0 m-0"
                >
                  It was A Great Experience
                </p>
              </div>
            </div>
            <div
              style={{ boxShadow: "0px 0px 8px 0px #00B2F529" }}
              className="d-flex align-items-center justify-content-between p-2 rounded-4 px-3 mb-3"
            >
              <img
                style={{ width: "72px", height: "72px" }}
                className="rounded-pill object-fit-cover"
                src="https://naacp.org/sites/default/files/styles/hero_desktop/public/images/iStock-970974446.jpg.webp?itok=CRjsK8ZA"
              />
              <div>
                <div className="d-flex align-items-center justify-content-between">
                  <p className="p-0 m-0 text-white">Stive Jobs</p>
                  <div className="d-flex align-items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      class="bi bi-star-fill"
                      viewBox="0 0 16 16"
                      color="#F68632"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <p className="p-0 m-0 text-white">4.5</p>
                  </div>
                </div>
                <p
                  style={{ color: "#FFFFFF", opacity: "60%" }}
                  className="p-0 m-0"
                >
                  It was A Great Experience
                </p>
              </div>
            </div>
            <div
              style={{ boxShadow: "0px 0px 8px 0px #00B2F529" }}
              className="d-flex align-items-center justify-content-between p-2 rounded-4 px-3"
            >
              <img
                style={{ width: "72px", height: "72px" }}
                className="rounded-pill object-fit-cover"
                src="https://naacp.org/sites/default/files/styles/hero_desktop/public/images/iStock-970974446.jpg.webp?itok=CRjsK8ZA"
              />
              <div>
                <div className="d-flex align-items-center justify-content-between">
                  <p className="p-0 m-0 text-white">Stive Jobs</p>
                  <div className="d-flex align-items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      class="bi bi-star-fill"
                      viewBox="0 0 16 16"
                      color="#F68632"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <p className="p-0 m-0 text-white">4.5</p>
                  </div>
                </div>
                <p
                  style={{ color: "#FFFFFF", opacity: "60%" }}
                  className="p-0 m-0"
                >
                  It was A Great Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> : <></>}

      <div className="d-flex align-items-end gap-4 mt-5 py-5">
        <p style={{ fontSize: "64px", color: "#FFFFFF" }} className="p-0 m-0">
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
            320 :{
                slidesPerView:1,
                spaceBetween:0
            },
            640 :{
                slidesPerView:2,
                spaceBetween:0
            },
            1024 :{
                slidesPerView:3,
                spaceBetween:0
            },
            1250: {
                slidesPerView:4,
                spaceBetween:0
            }
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
        <p style={{ fontSize: "24px", opacity: "60%" }} className="text-white">
          Qo'shimcha ma'lumot olish uchun sizni qiziqtirgan toifalarni tanlang.
        </p>

        <div className="row my-5">
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
