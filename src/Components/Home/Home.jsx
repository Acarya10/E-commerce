import Navbar from "../Navbar/Navbar";
import "./Home.css";
import { Carousel } from "react-bootstrap";
import { BsTwitterX } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";
import { FaCircleChevronRight } from "react-icons/fa6";
import data from "../../DataBase/Data";
import { Link } from "react-router-dom";
import { FaShopLock } from "react-icons/fa6";
import { RiAdvertisementFill } from "react-icons/ri";
import { FaGift } from "react-icons/fa";
import { IoMdHelpCircle } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";

export default function Home() {
  const imageLinks = [
    "https://m.media-amazon.com/images/G/01/2023/saucony/SAUCONY-BRAND-PAGE-2880x500.jpg",
    "https://asset22.ckassets.com/resources/image/staticpage_images/fila_desktop_banner.jpg",
    "https://a.ipricegroup.com/october-cms/Campaigns/Shopee/MY/AMS%2012.12/dr%20cardin/12.12_Affiliates%20AMS_iPrice_1200x200_drcardin.os.jpg",
    "https://asset22.ckassets.com/resources/image/staticpage_images/NikeShoes-Desktop-6Sep2018-1536327137.jpg",
  ];
  const dataDisplay = data.slice(0, 4);
  const dataDisplayTwo = data.slice(12, 20);
  return (
    <>
      <Navbar />

      <div className="category">
        <div className="category-items">
          <img
            alt="Nike"
            src="https://www.nicekicks.com/files/2016/10/air-jordan-1-satin-lead.gif"
          ></img>
          <p>Nike</p>
        </div>
        <div className="category-items">
          <img
            alt="Adidas"
            src="https://www.bing.com/th/id/OGC.b9e18a6a93df2ee1c4f9deb053a98fcb?pid=1.7&rurl=https%3a%2f%2fi.pinimg.com%2foriginals%2fe3%2f9c%2fe6%2fe39ce65d2206ccb9f10d4cea0f44cf96.gif&ehk=YrArdMc7iZnnqSTJJSYjRHvquaO3xCm5IIdIdvodIC0%3d"
          ></img>
          <p>Adidas</p>
        </div>
        <div className="category-items">
          <img
            alt="Puma"
            src="https://media.giphy.com/media/S45LWZ1FFowsPwbi5p/giphy.gif"
          ></img>
          <p>Puma</p>
        </div>
        <div className="category-items">
          <img
            alt="Goldstar"
            src="https://th.bing.com/th/id/OIP.3dCKJjeENWSYCBTPGlFTMAHaHa?rs=1&pid=ImgDetMain"
          ></img>
          <p>Goldstar</p>
        </div>
        <div className="category-items">
          <img
            alt="Vans"
            src="https://www.bing.com/th/id/OGC.9e9cdb55b7e9fe9984471edb581b2058?pid=1.7&rurl=https%3a%2f%2fmedia.giphy.com%2fmedia%2fvCiTdWEva8EbS%2fgiphy.gif&ehk=8HV4v3Bp6K2h0iCr%2fXbI688XHkBXb2Qm4Qy1WYm6M6g%3d"
          ></img>
          <p>Vans</p>
        </div>
        <div className="category-items">
          <img
            alt="New Balance"
            src="https://www.bing.com/th/id/OGC.c6cd67fe006a4f30ac42a15bab08f79e?pid=1.7&rurl=https%3a%2f%2fi.gifer.com%2fembedded%2fdownload%2fAQ8W.gif&ehk=RqTX6874E1%2fzgIijTYtSMnWgtFoMagLWeeCDNOAPEhU%3d"
          ></img>
          <p>New Balance</p>
        </div>
        <div className="category-items">
          <img
            alt="Fila"
            src="https://www.bing.com/th/id/OGC.630eda040e96f92ce69beb756a144af9?pid=1.7&rurl=https%3a%2f%2fmedia.tenor.com%2feb1v6AKulW4AAAAM%2fdad-shoes-normcore.gif&ehk=TdumF2D1AotBeoLFV025%2bRhpB4njsOFOQKwzC8snMo0%3d"
          ></img>
          <p>Fila</p>
        </div>

        <div className="category-items">
          <img
            alt="Reebok"
            src="https://media.giphy.com/media/wbyDXEMpfziJq/giphy.gif"
          ></img>
          <p>Reebok</p>
        </div>
        <div className="category-items">
          <img
            alt="Converse &amp; More"
            src="https://media1.giphy.com/media/OnlkYMfLR4WNG/giphy.gif"
          ></img>
          <p>Converse</p>
        </div>
      </div>

      <Carousel indicators={false} className="carousel">
        {imageLinks.map((imageLink, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 custom-img"
              src={imageLink}
              alt={`Slide ${index + 1}`}
              width={"100%"}
              height={"250rem"}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      <h2>
        Recommended <FaCircleChevronRight className="left-arrow" />
      </h2>
      <div className="items-container">
        {dataDisplay.map((item, index) => (
          <div key={index} id={item.id} className="items-home">
            <img src={item.img} alt={item.title} className="products" />
            <p className="title">{item.title}</p>
            <Link to={"/Product"}>
              <button type="button" className="btn btn-dark button59">
                Know More
              </button>
            </Link>
          </div>
        ))}
      </div>
      <h2>
        New Products <FaCircleChevronRight className="left-arrow" />
      </h2>
      <div
        className="items-container"
        style={{ justifyContent: "space-evenly" }}
      >
        {dataDisplayTwo.map((item, index) => (
          <div
            key={index}
            id={item.id}
            className="items-home"
            style={{ margin: "5px" }}
          >
            <img src={item.img} alt={item.title} className="products" />
            <p className="title">{item.title}</p>
            <Link to={"/Product"}>
              <button type="button" className="btn btn-dark button59">
                Know More
              </button>
            </Link>
          </div>
        ))}
      </div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h4>Shop</h4>
            <ul>
              <li>Men's Shoe</li>
              <li>Women's Shoe</li>
              <li>Kids' Shoe</li>
              <li>Accessories</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Help & Support</h4>
            <ul>
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>Shipping</li>
              <li>Returns & Exchanges</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Refund Policy</li>
              <li>Accessibility</li>
              <li>Order Cancellation and Return Policy</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect with Us</h4>
            <ul>
              <li>
                <FaFacebookSquare
                  style={{ height: "18px", width: "18px", marginRight: "5px" }}
                />{" "}
                Facebook
              </li>
              <li>
                <BsTwitterX
                  style={{ height: "16px", width: "16px", marginRight: "5px" }}
                />{" "}
                Twitter
              </li>
              <li>
                <SiInstagram
                  style={{ height: "16px", width: "16px", marginRight: "5px" }}
                />{" "}
                Instagram
              </li>
            </ul>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #fff",
            padding: "15px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <FaShopLock style={{ color: "#FFC200" }} />
            <span style={{ marginLeft: "5px" }}>Become a Seller</span>
          </div>

          <div
            className="c4gehN"
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <RiAdvertisementFill style={{ color: "#FFC200" }} />
            <span style={{ marginLeft: "5px" }}>Advertise</span>
          </div>

          <div
            className="c4gehN"
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <FaGift style={{ color: "#FFC200" }} />
            <span style={{ marginLeft: "5px" }}>Gift Cards</span>
          </div>

          <div
            className="c4gehN"
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <IoMdHelpCircle style={{ color: "#FFC200" }} />
            <span style={{ marginLeft: "5px" }}>Help Center</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            padding: "10px",
          }}
        >
          <img
            src="https://th.bing.com/th/id/OIP.QaZi542_r37y2_MLihPCZgHaDc?w=512&h=238&rs=1&pid=ImgDetMain"
            alt="Payment methods"
            style={{ width: "50%", height: "14rem" }}
          />
        </div>
        <div className="footer-bottom">
          <p>
            &copy; 2024 E-Commerce Shoe Store. All Rights Reserved. Build with
            ❤️ by{" "}
            <Link
              style={{ textDecoration: "none", color: "#FFC200" }}
              to={"https://github.com/Sagar-Shrestha10"}
            >
              Sagar & Gautam
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
}
