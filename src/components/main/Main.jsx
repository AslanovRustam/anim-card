import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import s from "./main.module.css";
import moon from "../../images/moon.jpg";
import earth from "../../images/earth.png";
import meteor from "../../images/meteor.png";
import spaceship2 from "../../images/spaceship2.png";
import Header from "../header/Header";
import Footer from "../footer/Footer";

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
        <h2 className={s.paralax}>welcome to the moon</h2>
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={1} className={s.title}>
        <img className={s.spaceship} src={spaceship2} alt="spaceship2" />
      </ParallaxLayer>
      <ParallaxLayer offset={1.5} speed={2}>
        <div className={s.parallaxContainer} id="animation">
          <div className={s.parallaxContent}>
            <div className={s.paralax}>Hello to my website</div>
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={2.945}>
        <Footer />
      </ParallaxLayer>
    </Parallax>
  );
}
