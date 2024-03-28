import QuoteCard from "../../components/QuoteCard";
import styles from "./SpeechDevelopmentBooks.module.scss";
import setRouterTitle from "../../../utils/useRouterTitle";
import Header from "../../components/Header";

export default function BooksPage(): JSX.Element {
  setRouterTitle("Развитие речи");
  return (
    <div className={styles.container}>
      <Header />
      <h1>Развитие речи</h1>
      <QuoteCard />
      <QuoteCard />
      <QuoteCard />
    </div>
  );
}
