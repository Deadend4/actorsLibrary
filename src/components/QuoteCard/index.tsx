import { Link } from "react-router-dom";
import Avatar from "../Avatar";
import styles from "./QuoteCard.module.scss";
import deadend4 from "../../assets/deadend4.jpg";

interface QuoteCardProps {
  image: string;
  name: string;
  title: string;
  message: string;
  url: string;
}
export default function QuoteCard({
  image = deadend4,
  name = "Неизвестен",
  title = "Без названия",
  message = "[ДАННЫЕ УДАЛЕНЫ]",
  url = "",
}: QuoteCardProps): JSX.Element {
  return (
    <Link to={url} className={styles.card}>
      <Avatar image={image} />
      <div className={styles.quoteMessage}>
        <div className={styles.titleBlock}>
          <p className={styles.title}>{title}</p>
          <p className={styles.name}>{name}</p>
        </div>

        <p className={styles.message}>{message}</p>
      </div>
    </Link>
  );
}
