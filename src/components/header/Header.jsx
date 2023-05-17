import s from "./header.module.css";

export default function Header() {
  return (
    <header>
      <nav>
        <ul className={s.list}>
          <li className={s.item}>main</li>
          <li className={s.item}>about</li>
          <li className={s.item}>contacts</li>
        </ul>
      </nav>
    </header>
  );
}
