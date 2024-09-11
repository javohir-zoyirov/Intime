import logo from "../image/logo.png";
import "./footer.css";
export const Footer = () => {
  return (
    <div>
      <div className="row py-3">
        <div className="col-lg-3 col-12">
          <ul>
            <li>
              <img className="" src={logo} />
            </li>
            <li>
              <a href="#">Foydalanish shartlari va Maxfiylik </a>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-12">
          <ul>
            <li>
              <a
                style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}
              >
                Bo'limlar
              </a>
            </li>
            <li>
              <a href="#">Kurslar</a>
            </li>
            <li>
              <a href="#">Ommabop</a>
            </li>
            <li>
              <a href="#">Yangi</a>
            </li>
          </ul>
        </div>

        <div className="col-lg-3 col-12">
          <ul>
            <li>
              <a
                style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}
              >
                Xizmatlarimiz
              </a>
            </li>
            <li>
              <a href="#">Binning ishlar</a>
            </li>
            <li>
              <a href="#">Yangi kurslar</a>
            </li>
            <li>
              <a href="#">Siz uchun qulaylikar</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-12">
          <ul>
            <li>
              <a
                style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}
              >
                Narsalar
              </a>
            </li>
            <li>
              <a href="#">Maxfiylik</a>
            </li>
            <li>
              <a href="#">Qo'llab-quvvatlash</a>
            </li>
            <li>
              <a href="#">Ma'lumot markazi</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
