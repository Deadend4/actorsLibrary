import { Link } from "react-router-dom";
import styles from "./Category.module.scss";

interface CategoryProps {
  title: string;
  url: string;
}
export default function Category({
  title = "Без названия",
  url = "",
}: CategoryProps): JSX.Element {
  return (
    <Link to={url} className={styles.card}>
      <div className={styles.quoteMessage}>
        <p className={styles.title}>{title}</p>
      </div>
    </Link>
  );
}
