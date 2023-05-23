import s from "./header.module.css";
import logo from "../../images/LinkedIn.png";
import SmoothScrollTo from "../../helpers/smoothScroll";

export default function Header() {
  return (
    <header>
      <nav>
        <a target="_blank" href="https://www.linkedin.com/in/aslanovrustam/">
          <img
            className={s.logo}
            src={logo}
            alt="link to AslanovRustam linkedin"
          />
        </a>
        <ul className={s.list}>
          <li className={s.item}>
            <SmoothScrollTo targetId="animation">animation</SmoothScrollTo>
          </li>
          <li className={s.item}>contacts</li>
          <li className={s.hamburger}>
            <div className={s.line}></div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
