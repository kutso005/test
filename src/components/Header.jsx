import React, { useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineWhatsapp } from "react-icons/md";
import { SiTelegram } from "react-icons/si";
import What from "./../image/What.svg";
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const handleScrollToPrice = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTo = documentHeight - windowHeight;
    window.scrollTo({ top: 700, behavior: "smooth" });
  };
  const handleScrollToP = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTo = documentHeight - windowHeight;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="header_ison">
            <div className="icons">
              <FaPhone color={"#11992D"}/>
            </div>
            <div className="icons">
              <FaMapMarkerAlt color={"#11992D"}/>
            </div>
            <div className="icons">
              <MdMail  color={"#11992D"}/>
            </div>
          </div>
          <div className="navlink">
            <NavLink onClick={handleScrollToP} className="NavLink">
              <p>Заказать уборку</p>
            </NavLink>
            <NavLink className="NavLink" onClick={handleScrollToPrice}>
              <p>Услуги</p>
            </NavLink>
            <NavLink className="NavLink">
              <p>О нас</p>
            </NavLink>
            <NavLink className="NavLink">
              <p>Отзывы</p>
            </NavLink>
            <NavLink className="NavLink">
              <p>Контакты</p>
            </NavLink>
          </div>
          <div className="header_ison">
            <div className="icons">
              <FaInstagram color={"#11992D"} />
            </div>
            <div className="icons">
              <MdOutlineWhatsapp color={"#11992D"} />
            </div>
            <div className="icons">
              <SiTelegram  color={"#11992D"}/>
            </div>
          </div>
        </div>
        <div className="headrr">
        <div>
          <div></div>
          <img className="image_fixete" src={What} alt="" />
          <div className="image_dive"></div>
        </div>
        <div onClick={() => setMenu(true)} className="burger">
          <div className="ico" style={{ marginTop: "4px" }}>
            {" "}
          </div>
          <div className="ico"></div>
          <div className="ico"></div>
        </div>
      </div>
      </div>
     
      {menu&&(
        <div  className="menu">
           <div onClick={() => setMenu(false)} className="menu_not"></div>
           <div className="menu_container">
          <div className="close" onClick={() => setMenu(false)}>
          <IoIosCloseCircleOutline fontSize={"30px"} color={"#003457"} />
          </div>
          <div>
          <div className="navlink_menu">
            <NavLink onClick={()=>handleScrollToP()||setMenu(false)} className="NavLink">
              <p>Заказать уборку</p>
            </NavLink>
            <NavLink className="NavLink"  onClick={()=>handleScrollToPrice()|| setMenu(false)}>
              <p>Услуги</p>
            </NavLink>
            <NavLink className="NavLink">
              <p>О нас</p>
            </NavLink>
            <NavLink className="NavLink">
              <p>Отзывы</p>
            </NavLink>
            <NavLink className="NavLink">
              <p>Контакты</p>
            </NavLink>
          </div>
          </div>
          <div className="icons_many">
          <div className="header_ison">
            <div className="icons_top">
              <FaInstagram fontSize={"30px"} />
            </div>
            <div className="icons_top">
              <MdOutlineWhatsapp  fontSize={"30px"}/>
            </div>
            <div className="icons_top">
              <SiTelegram fontSize={"30px"} />
            </div>
          </div>
          <div className="header_ison">
            <div className="icons_top">
              <FaPhone fontSize={"25px"}/>
            </div>
            <div className="icons_top">
              <FaMapMarkerAlt  fontSize={"25px"}/>
            </div>
            <div className="icons_top">
              <MdMail fontSize={"30px"}/>
            </div>
          </div>
          </div>
           </div>
           
        </div>
      )}
    </div>
  );
}
