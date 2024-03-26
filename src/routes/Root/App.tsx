import ButtonA from "../../components/ButtonA";
import styles from "./App.module.scss";
import QuoteCard from "../../components/QuoteCard";
import deadend4 from "../../assets/deadend4.jpg";
import setRouterTitle from "../../../utils/useRouterTitle";

function App() {
  setRouterTitle("Библиотека Актера");
  return (
    <div className={styles.container}>
      <h1>Библиотека Актера</h1>
      <div className={styles.buttonsBlock}>
        <ButtonA href="/books/" content="Книги" />
        <ButtonA href="/twisters/" content="Скороговорки" />
        <ButtonA href="/videos/" content="Видео" />
      </div>
      <QuoteCard
        imageURL={deadend4}
        name="deadend4"
        message="И в наших жилах умирает последний рассвет."
      />
    </div>
  );
}

export default App;
