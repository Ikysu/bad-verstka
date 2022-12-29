import style from "./style.module.css";
import Heart from "@/component/Heart";

import star from "@/assets/star.svg";
import starSelected from "@/assets/star-red.svg";

function Card(props) {
  let { srcimg, geo, title, price, stars } = props;

  return (
    <div className={style.Card}>
      <img src={srcimg} alt={title} />
      <div className={style.info}>
        <span className={style.geo}>{geo}</span>
        <h2>{title}</h2>

        <div className={style.line}>
          <span className={style.price}>{price} ₽/сутки</span>
          <div className={style.stars}>
            {Array(stars)
              .fill()
              .map(() => {
                return <img src={starSelected} />;
              })}
            {Array(5 - stars)
              .fill()
              .map(() => {
                return <img src={star} />;
              })}
          </div>
        </div>

        <button className={style.btn}>Подробнее</button>
      </div>
    </div>
  );
}

export default Card;
