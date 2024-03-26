import ButtonA from "../../components/ButtonA";
import QuoteCard from "../../components/QuoteCard";
import actor from "../../assets/stanislavsky.jpg";
import styles from "./Books.module.scss";
import setRouterTitle from "../../../utils/useRouterTitle";

export default function BooksPage(): JSX.Element {
  setRouterTitle("Книги");
  return (
    <div className={styles.container}>
      <h1>Книжки</h1>
      <p>Тут будут книжки, а пока:</p>
      <ButtonA href="/" content="На главную" />
      <QuoteCard
        imageURL={actor}
        name="Константин Станиславский"
        message="Актёр должен научиться трудное сделать привычным, привычное лёгким и лёгкое прекрасным. "
      />
    </div>
  );
}
