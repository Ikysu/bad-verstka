import HeartLogo from "@/assets/heart.svg";
import HeartGreenLogo from "@/assets/heart-green.svg";
import style from "./style.module.css";

function Heart(props) {
  let { selected } = props;
  return (
    <div className={style.Heart}>
      <img src={selected ? HeartGreenLogo : HeartLogo} alt="logo" />
    </div>
  );
}

export default Heart;
