import styles from "./ActingBooks.module.scss";
import setRouterTitle from "../../utils/useRouterTitle";
import Header from "../../components/Header";
import { dataParser } from "../../utils/useDataParser";
import books from "../../../database/books.json";

export default function BooksPage(): JSX.Element {
  const pageTitle = "Актерское мастерство";
  setRouterTitle(pageTitle);

  const quoteCards = dataParser(books, pageTitle);
  return (
    <div className={styles.container}>
      <Header />
      <h1>{pageTitle}</h1>
      {quoteCards}
    </div>
  );
}
