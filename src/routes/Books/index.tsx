import styles from "./Books.module.scss";
import setRouterTitle from "../../utils/useRouterTitle";
import Header from "../../components/Header";
import books from "../../../database/books.json";
import { categoryParser } from "../../utils/dataParser";

export function getCategory(id: string): string {
  switch (id) {
    case "acting":
      return "Актерское мастерство";
    case "voice-prod":
      return "Постановка голоса";
    case "sound-prod":
      return "Звукорежиссура";
    case "translation":
      return "Перевод";
    default:
      return "";
  }
}

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
