import setRouterTitle from "../../utils/useRouterTitle";
import { useLoaderData } from "react-router-dom";
import { getCategories } from "../../utils/utils";
import { categoryParser, titleParser } from "../../utils/dataParser";

interface LoaderProps {
  params: {
    categoryId: string;
  };
}

export const loader = async ({ params }: LoaderProps) => {
  const database = await getCategories(params.databaseId);
  return { database };
};

export default function CategoriesPage(): JSX.Element {
  const { database } = useLoaderData();
  const title = titleParser(database);
  setRouterTitle(title);

  const categories = categoryParser(database);

  return (
    <>
      <h1>{title}</h1>
      {categories}
    </>
  );
}
