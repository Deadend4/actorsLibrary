import styles from "./BooksPage.module.scss";
import setRouterTitle from "../../utils/useRouterTitle";
import Header from "../../components/Header";
import { dataParser } from "../../utils/dataParser";
import { getCategories, getCategory } from "../../utils/utils";
import { useLoaderData } from "react-router-dom";

interface LoaderProps {
  params: {
    categoryId: string;
    databaseId: string;
  };
}

export const loader = async ({ params }: LoaderProps) => {
  const category = await getCategory(params.categoryId);
  const database = await getCategories(params.databaseId);
  return { category, database };
};
export default function BooksPage(): JSX.Element {
  const { category, database } = useLoaderData();
  setRouterTitle(category);

  const quoteCards = dataParser(database, category);
  return (
    <div className={styles.container}>
      <Header />
      <h1>{category}</h1>
      {quoteCards}
    </div>
  );
}
