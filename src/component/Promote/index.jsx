import style from "./style.module.css";

import Human from "@/assets/human.svg";

function Promote() {
  return (
    <div className={style.Promote}>
      <img src={Human} className={style.bg} alt="human" />
      <h1 className={style.name}>
        Подпишитесь на нашу рассылку, чтобы получать последние обновления и
        предложения
      </h1>
      <span className={style.desc}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's
      </span>
      <div className={style.inp}>
        <input type="email" />
        <input type="submit" value="Подписаться" />
      </div>
    </div>
  );
}

export default Promote;
