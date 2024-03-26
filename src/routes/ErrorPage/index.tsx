import styles from "./ErrorPage.module.scss";
import errorPic from "../../assets/error.png";
import ButtonA from "../../components/ButtonA";
import setRouterTitle from "../../../utils/useRouterTitle";

export default function ErrorPage(): JSX.Element {
  setRouterTitle("404 Страница не найдена");
  return (
    <div className={styles.container}>
      <h1>404 Страница не найдена.</h1>
      <ButtonA href="/" content="На главную" />
      <img src={errorPic} alt="Ошибка" />
    </div>
  );
}
