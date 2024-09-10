import { useNavigate } from "react-router";
import logo from "../image/logo.png"
export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <img onClick={() => {navigate("/")}} style={{width:"147px", height:"52px", cursor:"pointer"}} src={logo} alt="#"/>
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
          <a style={{color:"#FFFFFF", fontSize:'20px'}} class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Kategoriyalar
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
            </ul>
            <div className="d-flex align-items-center gap-3"> 
              <input className="border-0 p-2 rounded-5" style={{backgroundColor:"#20234E", border: "1px solid #45497D"}} placeholder="Search"/>
              <button onClick={() => {navigate('/cabinet')}} style={{color:"#FFFFFF", fontSize:"20px"}} className="btn bg-transparent border-0 d-flex gap-2 align-items-center">
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
    </div>
  );
};
