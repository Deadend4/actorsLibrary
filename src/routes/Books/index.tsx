import styles from "./Books.module.scss";
import setRouterTitle from "../../utils/useRouterTitle";
import Header from "../../components/Header";
import { useLoaderData } from "react-router-dom";
import { getCategories } from "../../utils/utils";
import { categoryParser, titleParser } from "../../utils/dataParser";

interface LoaderProps {
  params: {
    categoryId: string;
  };
}

export const loader = async ({ params }: LoaderProps) => {
  console.log(params);
  const database = await getCategories(params.databaseId);
  return { database };
};

export default function BooksPage(): JSX.Element {
  const { database } = useLoaderData();
  const title = titleParser(database);
  setRouterTitle(title);

  const categories = categoryParser(database);

  return (
    <div className={styles.container}>
      <Header />
      <h1>{title}</h1>
      {categories}
    </div>
  );
}
