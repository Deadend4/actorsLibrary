import Category from "../components/Category";
import QuoteCard from "../components/QuoteCard";
import TwisterDiv from "../components/TwisterDiv";
import Video from "../components/Video";
import styles from "../routes/BooksPage/BooksPage.module.scss";

export function twisterParser(database: JSON) {
  const renderData = database.content.map((item) => {
    return <TwisterDiv key={item.id} description={item.description} />;
  });
  return renderData;
}

export function randomTwisterParser(database: JSON, count: number) {
  const indexArray = createXNumbers(count, database.content.length);

  const renderData = database.content.map((item, index) => {
    if (indexArray.includes(index)) {
      return <TwisterDiv key={item.id} description={item.description} />;
    } else {
      return false;
    }
  });
  return renderData;
}

function createXNumbers(X: number, MaxRange: number) {
  const array = new Array<number>();
  do {
    const newValue = Math.floor(Math.random() * (MaxRange - 1));
    if (!array.includes(newValue)) {
      array.push(newValue);
    }
  } while (array.length < X);
  return [...array];
}

export function categoryParser(database: JSON) {
  const renderData = database.content.map((item) => {
    return <Category title={item.category} url={item.url} />;
  });
  return renderData;
}

export function titleParser(database: JSON) {
  const renderData = database.title;
  return renderData;
}

export function dataParser(database: JSON, category: string) {
  const filteredByCategory = database.content.filter(
    (item) => item.category === category,
  )[0];
  let renderData;
  let renderVideo;
  switch (database.title) {
    case "Категории книг":
      renderData = filteredByCategory.content.map((item) => {
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
      break;
    case "Видеоматериалы":
      renderVideo = filteredByCategory.content.map((item) => {
        return <Video url={item.url} title={item.title} />;
      });
      renderData = <div className={styles.videosBlock}>{renderVideo}</div>;
      break;
    default:
      break;
  }

  return renderData;
}
