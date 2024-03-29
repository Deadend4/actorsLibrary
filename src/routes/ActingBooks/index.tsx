import QuoteCard from "../../components/QuoteCard";
import styles from "./ActingBooks.module.scss";
import setRouterTitle from "../../../utils/useRouterTitle";
import Header from "../../components/Header";
import books from "../../../database/books.json";

export default function BooksPage(): JSX.Element {
  const pageTitle = "Постановка голоса";
  setRouterTitle(pageTitle);

  function dataParser(category: string) {
    const filteredByCategory = books.books.filter(
      (item) => item.category === category,
    )[0];

    const renderData = filteredByCategory.content.map((item) => {
      return (
        <QuoteCard
          key={item.id}
          author={item.author}
          image={item.image}
          description={item.description}
          title={item.title}
          url={item.download}
          newTab={true}
        />
      );
    });
    return renderData;
  }

  const quoteCards = dataParser(pageTitle);
  return (
    <div className={styles.container}>
      <Header />
      <h1>{pageTitle}</h1>
      {quoteCards}
    </div>
  );
}
