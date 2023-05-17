import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import s from "./main.module.css";
import moon from "../../images/moon.jpg";
import earth from "../../images/earth.png";
import Header from "../header/Header";

export default function Main() {
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
        <h2>welcome</h2>
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={1}>
        <h2>Bye</h2>
      </ParallaxLayer>
    </Parallax>
  );
}
