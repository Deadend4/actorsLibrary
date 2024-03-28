import QuoteCard from "../../components/QuoteCard";
import actorImg from "../../assets/actorsWork.jpg";
import actorsBibleImg from "../../assets/actorsBible.jpg";
import styles from "./Books.module.scss";
import setRouterTitle from "../../../utils/useRouterTitle";
import Header from "../../components/Header";
import Category from "../../components/Category";

export default function BooksPage(): JSX.Element {
  setRouterTitle("Книги");
  return (
    <div className={styles.container}>
      <Header />
      <h1>Категории книг</h1>
      <Category title="Актерское мастерство" url="/books/acting/" />
      <Category title="Развитие речи" url="/books/speech-dev/" />
      <Category title="Звукорежиссура" url="/books/sound-production/" />
    </div>
  );
}
