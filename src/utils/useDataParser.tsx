import Category from "../components/Category";
import QuoteCard from "../components/QuoteCard";

export function categoryParser(database: JSON) {
  const renderData = database.books.map((item) => {
    return <Category title={item.category} url={item.url} />;
  });
  return renderData;
}
export function dataParser(database: JSON, category: string) {
  const filteredByCategory = database.books.filter(
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
