import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import s from "./main.module.css";
import moon from "../../images/moon.jpg";
import earth from "../../images/earth.png";
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
import Header from "../header/Header";
import { useState, useEffect } from "react";
import Footer from "../footer/Footer";

export default function Main() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [click, setClick] = useState(false); ///НЕ ОБЯЗАТЕЛЬНО - отслеживаем клики
  const [linkHover, setLinkHover] = useState(false); ///НЕ ОБЯЗАТЕЛЬНО - для стилизации ховера
  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", mMove);
      document.addEventListener("mousedown", mDown); ///НЕ ОБЯЗАТЕЛЬНО - отслеживаем клики
      document.addEventListener("mouseup", mUp); ///НЕ ОБЯЗАТЕЛЬНО - отслеживаем клики
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", mMove);
      document.addEventListener("mousedown", mDown); ///НЕ ОБЯЗАТЕЛЬНО - отслеживаем клики
      document.addEventListener("mouseup", mUp); ///НЕ ОБЯЗАТЕЛЬНО - отслеживаем клики
    };

    const mMove = (el) => {
      setPosition({
        x: el.clientX - window.innerWidth / 2,
        y: el.clientY - window.innerHeight / 2,
      });
    };

    const mDown = () => {
      setClick(true);
    };

    const mUp = () => {
      setClick(false);
    };

    const addLinkEvents = () => {
      document.querySelectorAll("a").forEach((el) => {
        el.addEventListener("mouseover", () => setLinkHover(true));
        el.addEventListener("mouseout", () => setLinkHover(false));
      });
      document.querySelectorAll("button").forEach((el) => {
        el.addEventListener("mouseover", () => setLinkHover(true));
        el.addEventListener("mouseout", () => setLinkHover(false));
      });
      document.querySelectorAll("label").forEach((el) => {
        el.addEventListener("mouseover", () => setLinkHover(true));
        el.addEventListener("mouseout", () => setLinkHover(false));
      });
    };

    addEventListeners();
    addLinkEvents();
    return () => removeEventListeners();
  }, []);
  console.log("position", position);
  return (
    <Parallax pages={3}>
      <ParallaxLayer
        offset={0}
        speed={1}
        factor={4}
        style={{ backgroundImage: `url(${moon})`, backgroundSize: "contain" }}
      />
      <ParallaxLayer
        offset={2}
        speed={1}
        factor={4}
        style={{ backgroundImage: `url(${earth})`, backgroundSize: "contain" }}
      />
      <ParallaxLayer offset={0} speed={0.1}>
        <Header />
      </ParallaxLayer>
      <ParallaxLayer offset={0.5} speed={0.1} className={s.title}>
        <h2
          className={s.paralax}
          style={{
            // transform: `translate(${position.x}px, ${position.y}px)`,
            transform: `translate(calc((${-position.x}px / 10)), calc(( ${-position.y}px / 10)))`,
          }}
        >
          welcome
        </h2>
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={1}>
        <h2>Bye</h2>
      </ParallaxLayer>
      <ParallaxLayer
        offset={1.5}
        speed={2}
        // style={{
        //   backgroundImage: `url(${background})`,
        //   backgroundSize: "contain",
        // }}
        // factor={10}
      >
        {/* <div>
          <img
            className={`${s.paralax} ${s.bg}`}
            src={background}
            alt="mountain_1"
          />
          <img className={s.paralax} src={mountain_1} alt="mountain_1" />
          <img className={s.paralax} src={mountain_2} alt="mountain_2" />
          <img className={s.paralax} src={mountain_3} alt="mountain_3" />
          <img className={s.paralax} src={mountain_4} alt="mountain_4" />
          <img className={s.paralax} src={mountain_5} alt="mountain_5" />
          <img className={s.paralax} src={mountain_6} alt="mountain_6" />
          <img className={s.paralax} src={mountain_7} alt="mountain_7" />
          <img className={s.paralax} src={mountain_8} alt="mountain_8" />
          <img className={s.paralax} src={mountain_9} alt="mountain_9" />
          <img className={s.paralax} src={mountain_10} alt="mountain_10" />
        </div> */}
        <div className={s.paralax}>Hello to my website</div>
      </ParallaxLayer>
      <ParallaxLayer offset={2.9}>
        <Footer />
      </ParallaxLayer>
    </Parallax>
  );
}
