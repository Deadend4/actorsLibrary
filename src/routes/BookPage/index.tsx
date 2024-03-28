import Header from "../../components/Header";
import styles from "./BookPage.module.scss";
import setRouterTitle from "../../../utils/useRouterTitle";

interface BookPageProps {
  title: string;
  description: string;
  image: string;
}
export default function BookPage({
  title = "Без названия",
  description = "Описание отсутствует.",
}: BookPageProps): JSX.Element {
  setRouterTitle(title);
  return (
    <div className={styles.container}>
      <Header />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
