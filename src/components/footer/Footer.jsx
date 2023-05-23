import React from "react";
import logo from "../../images/LinkedIn.png";
import phone from "../../images/Phone.png";
import s from "./footer.module.css";

export default function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <a target="_blank" href="https://www.linkedin.com/in/aslanovrustam/">
            <img
              className={s.logo}
              src={logo}
              alt="link to AslanovRustam linkedin"
            />
          </a>
        </li>
        <li>
          <a href="tel:+380673104817">
            <img
              className={s.logo}
              src={phone}
              alt="link to AslanovRustam telephone"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
}
