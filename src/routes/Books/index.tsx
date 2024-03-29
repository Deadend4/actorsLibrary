import styles from "./Books.module.scss";
import setRouterTitle from "../../utils/useRouterTitle";
import Header from "../../components/Header";
import books from "../../../database/books.json";
import { categoryParser } from "../../utils/useDataParser";

export default function BooksPage(): JSX.Element {
  setRouterTitle("Книги");

  const categories = categoryParser(books);

  return (
    <div className={styles.container}>
      <Header />
      <h1>Категории книг</h1>
      {categories}
    </div>
  );
}
