import Logo from "@/assets/logo.svg";
import onlyLogo from "@/assets/only-logo.svg";
import GeoLogo from "@/assets/geo.svg";
import PersonLogo from "@/assets/person.svg";

import style from "./style.module.css";

function Header() {
  return (
    <div className={style.Header}>
      <img src={Logo} className={style.logo} alt="logo" />
      <img src={onlyLogo} className={style.altlogo} alt="altlogo" />
      <div className={style.list}>
        <a href="#" className={style.selected}>
          Главная
        </a>
        <a href="#">Бронирование</a>
        <a href="#">О нас</a>
        <a href="#">Контакты</a>
      </div>
      <div className={style.dropdown}>
        <span className={style.dropbtn}>Главная</span>
        <div className={style.pages}>
          <a href="#">Бронирование</a>
          <a href="#">О нас</a>
          <a href="#">Контакты</a>
        </div>
      </div>
      <div className={style.controls}>
        <img src={GeoLogo} alt="geo" />
        <img src={PersonLogo} alt="geo" />
      </div>
    </div>
  );
}

export default Header;
