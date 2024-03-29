import styles from "./App.module.scss";
import QuoteCard from "../../components/QuoteCard";
import deadend4 from "../../assets/deadend4.jpg";
import setRouterTitle from "../../../utils/useRouterTitle";
import Header from "../../components/Header";

function App() {
  setRouterTitle("Библиотека Озвучкера");
  return (
    <div className={styles.container}>
      <Header />
      <h1>Библиотека Озвучкера</h1>
      <QuoteCard
        image={deadend4}
        title="Я Вас категорически приветствую!"
        author="deadend4"
        description="Тут Вы найдете всё, что нужно знать актеру."
        url=""
      />
    </div>
  );
}

export default App;
