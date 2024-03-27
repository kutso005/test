import React from "react";
import What from "./../image/What.svg";
export default function About() {
  return (
    <div id="about">
      <div className="container">
        <div className="about">
          <img className="image_fixet" src={What} alt="" />
          <div className="image_div"></div>
          <div>
            <h2 style={{marginTop:'85px'}}>Чистый мир – Ваш путь <br />     к идеальной чистоте и комфорту!</h2>
               <div className="dev">
               <input className="inputs" type="text"  placeholder="Ваше имя"/>
                <input className="inputs" type="text"  placeholder="Ваш номер телефона или WhatsApp"/>
                <button className="btn">Заказать уборку</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
