import style from "./style.module.css";

function Info() {
  return (
    <div className={style.Info}>
      <h1 className={style.name}>Лучшие отели</h1>
      <span className={style.desc}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </span>
    </div>
  );
}

export default Info;
