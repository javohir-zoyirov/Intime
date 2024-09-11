import logo from "../image/logo.png";
import koz from "../image/ko'z.png";
import koz2 from "../image/koz2.png";
import person1 from "../image/person1.png";
import person2 from "../image/person2.png";
import person3 from "../image/person3.png";
import { useState } from "react";
import { DatePicker, Input, Radio, Select } from "antd";
import { Option } from "antd/es/mentions";
import styled from "styled-components";
import { useNavigate } from "react-router";
export const Cabinet = () => {
  const [active, setActive] = useState(1);
  const navigate = useNavigate();
  const StyledRadio = styled(Radio)`
    .ant-radio-inner {
      border-color: #e32652;
    }

    .ant-radio-checked .ant-radio-inner {
      border-color: #e32652;
      background-color: #e32652;
    }

    .ant-radio-inner::after {
      background-color: #fff;
    }
  `;

  return (
    <div>
      <div  className="bg-black">
        <div className="container-fluid">
          <div className="d-flex align-items-center justify-content-between">
            <img
              onClick={() => {
                navigate("/");
              }}
              style={{ cursor: "pointer" }}
              src={logo}
              alt="#"
            />
            <div className="d-flex align-items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-bell text-white"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
              </svg>
              <img style={{ width: "48px", height: "48px" }} src={koz} />
            </div>
          </div>
        </div>

        <div className="container-fluid mx-auto">
          <p style={{ color: "#FFFFFF", fontSize: "64px" }}>Shaxsiy kabinet</p>
          <div className="pt-3 pb-1 d-flex align-items-center gap-4">
            <button
              onClick={() => {
                setActive(1);
              }}
              style={
                active === 1
                  ? {
                      color: "#FFFFFF",
                      borderBottom: "3px solid #FFFFFF",
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
              className="btnn1 bg-transparent rounded-0 text-white"
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
                      color: "#FFFFFF",
                      borderBottom: "3px solid #FFFFFF",
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
              className="btnn1 bg-transparent rounded-0 text-white"
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
                      color: "#FFFFFF",
                      borderBottom: "3px solid #FFFFFF",
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
              className="btnn1 bg-transparent rounded-0 text-white"
            >
              Dizayn
            </button>
          </div>
        </div>
      </div>

      {active === 1 ? (
        <div style={{ backgroundColor: "#FFFFF2" }} className="">
          <p
            className="container-fluid mx-auto pt-4"
            style={{ fontSize: "48px" }}
          >
            Barcha kurslar
          </p>
          <div className="row container-fluid mx-auto py-4">
            <div className="col-lg-4 col-md-3 col-sm-6">
              <div
                style={{
                  boxShadow: "0px 0px 23px 0px #00000029",
                  borderRadius: "12px",
                }}
                className="bg-white pb-1 h-100"
              >
                <img
                  style={{ borderRadius: "12px, 12px, 0px, 0px" }}
                  className="w-100"
                  src={person1}
                />
                <div className=" text-center mt-3">
                  <p style={{ color: "#001A25", fontSize: "20px" }}>
                    Potensialingizni ochish: Ijodiy ishonchni mustahkamlash
                    uchun 5 ta mashq
                  </p>
                  <div className="d-flex align-items-center gap-0">
                    <div
                      style={{ height: "8px", backgroundColor: "#818181" }}
                      className="w-25"
                    ></div>
                    <div
                      style={{ height: "8px", backgroundColor: "#D9D9D9" }}
                      className="w-75"
                    ></div>
                  </div>
                  <p style={{ fontSize: "18px", color: "#000000" }}>
                    Emma Gannon
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-3 col-sm-6">
              <div
                style={{
                  boxShadow: "0px 0px 23px 0px #00000029",
                  borderRadius: "12px",
                }}
                className="bg-white pb-1 h-100"
              >
                <img
                  style={{ borderRadius: "12px, 12px, 0px, 0px" }}
                  className="w-100"
                  src={person2}
                />
                <div className=" text-center mt-3">
                  <p style={{ color: "#001A25", fontSize: "20px" }}>
                    DSLR fotografiya asoslari
                  </p>
                  <div className="d-flex align-items-center gap-0">
                    <div
                      style={{ height: "8px", backgroundColor: "#818181" }}
                      className="w-25"
                    ></div>
                    <div
                      style={{ height: "8px", backgroundColor: "#D9D9D9" }}
                      className="w-75"
                    ></div>
                  </div>
                  <p style={{ fontSize: "18px", color: "#000000" }}>
                    Photo Essentials x Justin Bridges
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-3 col-sm-6">
              <div
                style={{
                  boxShadow: "0px 0px 23px 0px #00000029",
                  borderRadius: "12px",
                }}
                className="bg-white pb-1 h-100"
              >
                <img
                  style={{ borderRadius: "12px, 12px, 0px, 0px" }}
                  className="w-100"
                  src={person3}
                />
                <div className=" text-center mt-3">
                  <p style={{ color: "#001A25", fontSize: "20px" }}>
                    O'rmondagi akvarel: tabiiy dunyoni bo'yash uchun yangi
                    boshlanuvchilar uchun
                  </p>
                  <div className="d-flex align-items-center gap-0">
                    <div
                      style={{ height: "8px", backgroundColor: "#818181" }}
                      className="w-25"
                    ></div>
                    <div
                      style={{ height: "8px", backgroundColor: "#D9D9D9" }}
                      className="w-75"
                    ></div>
                  </div>
                  <p style={{ fontSize: "18px", color: "#000000" }}>
                    Rozali Xayzlett
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : active === 2 ? (
        <div style={{ backgroundColor: "#FFFFF2", height:'100%' }} className="">
          <div
            className="container-fluid mx-auto d-flex justify-content-between flex-column h-100"
            style={{ height: "" }}
          >
            <p className="pt-4" style={{ fontSize: "48px" }}>
              Asosiy ma'lumotlar
            </p>
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="d-flex flex-column h-100"
                  style={{ gap: "32px" }}
                >
                  <div>
                    <p className="p-0 m-0">Profil rasmini o'zgartirish</p>
                    <img style={{ width: "60px", height: "60px" }} src={koz2} />
                  </div>
                  <input
                    className="form-control bg-transparent"
                    placeholder="Ismingiz"
                  />
                  <input
                    className="form-control bg-transparent"
                    placeholder="Familiya"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="d-flex flex-column mt-3"
                  style={{ gap: "32px" }}
                >
                  <Select
                    placeholder="O'zbek"
                    style={{ width: "100%" }}
                    className="bg-transparent"
                  >
                    <Option>Uz</Option>
                    <Option>Ru</Option>
                    <Option>Eng</Option>
                  </Select>

                  <div>
                    <Input.TextArea
                      placeholder="Qisqacha ma'lumot"
                      className="bg-transparent"
                    />
                    <p style={{ fontSize: "12px" }} className="p-0 m-0">
                      Ushbu bo'limda havolalar va kupon kodlariga ruxsat
                      berilmaydi.
                    </p>
                  </div>
                  <div>
                    <p className="p-0 m-0">Jinsingizni tanlang</p>
                    <StyledRadio.Group>
                      <StyledRadio value={1}>Ayol</StyledRadio>
                      <StyledRadio value={2}>Erkak</StyledRadio>
                    </StyledRadio.Group>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-end py-3">
              <button
                style={{ background: "#E32652" }}
                className="btn text-white"
              >
                SAQLASH
              </button>
            </div>
          </div>
        </div>
      ) : (
        <h1> Malumot yo'q</h1>
      )}
    </div>
  );
};
