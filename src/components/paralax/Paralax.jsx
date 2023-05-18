import s from "./paralax.module.css";

import background from "../../images/background.png";
import mountain_1 from "../../images/mountain_1.png";
import mountain_2 from "../../images/mountain_2.png";
import mountain_3 from "../../images/mountain_3.png";
import mountain_4 from "../../images/mountain_4.png";
import mountain_5 from "../../images/mountain_5.png";
import mountain_6 from "../../images/mountain_6.png";
import mountain_7 from "../../images/mountain_7.png";
import mountain_8 from "../../images/mountain_8.png";
import mountain_9 from "../../images/mountain_9.png";
import mountain_10 from "../../images/mountain_10.png";

export default function Paralax() {
  return (
    <div className={s.container}>
      <img
        className={`${s.paralax} ${s.bg}`}
        src={background}
        alt="background"
      />
      <img
        className={`${s.paralax} ${s.mountain_10}`}
        src={mountain_10}
        alt="mountain_10"
      />
      <img
        className={`${s.paralax} ${s.mountain_9}`}
        src={mountain_9}
        alt="mountain_9"
      />
      <img
        className={`${s.paralax} ${s.mountain_8}`}
        src={mountain_8}
        alt="mountain_8"
      />
      <img
        className={`${s.paralax} ${s.mountain_7}`}
        src={mountain_7}
        alt="mountain_7"
      />
      <div className={`${s.paralax} ${s.text}`}>Hello to my website</div>
      <img
        className={`${s.paralax} ${s.mountain_6}`}
        src={mountain_6}
        alt="mountain_6"
      />
      <img
        className={`${s.paralax} ${s.mountain_5}`}
        src={mountain_5}
        alt="mountain_5"
      />
      <img
        className={`${s.paralax} ${s.mountain_4}`}
        src={mountain_4}
        alt="mountain_4"
      />
      <img
        className={`${s.paralax} ${s.mountain_3}`}
        src={mountain_3}
        alt="mountain_3"
      />
      <img
        className={`${s.paralax} ${s.mountain_2}`}
        src={mountain_2}
        alt="mountain_2"
      />
      <img
        className={`${s.paralax} ${s.mountain_1}`}
        src={mountain_1}
        alt="mountain_1"
      />
    </div>
  );
}
