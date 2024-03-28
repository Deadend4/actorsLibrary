import Avatar from "../Avatar";
import ButtonA from "../ButtonA";
import styles from "./Header.module.scss";
import mainPic from "../../assets/deadend4.jpg";

export default function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <ButtonA href="/" content={<Avatar image={mainPic} />} />
      <ButtonA href="/books/" content="Книги" />
      <ButtonA href="/twisters/" content="Скороговорки" />
      <ButtonA href="/videos/" content="Видео" />
    </header>
  );
}
