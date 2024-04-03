import styles from "./ActiveBooks.module.scss";
import setRouterTitle from "../../utils/useRouterTitle";
import Header from "../../components/Header";
import { dataParser } from "../../utils/dataParser";
import books from "../../../database/books.json";
import { getCategory } from "../../utils/utils";
import { useLoaderData } from "react-router-dom";

interface LoaderProps {
  params: {
    categoryId: string;
  };
}

export const loader = async ({ params }: LoaderProps) => {
  const category = await getCategory(params.categoryId);
  return { category };
};
export default function BooksPage(): JSX.Element {
  const { category } = useLoaderData();
  setRouterTitle(category);

  const quoteCards = dataParser(books, category);
  return (
    <div className={styles.container}>
      <Header />
      <h1>{category}</h1>
      {quoteCards}
    </div>
  );
}
