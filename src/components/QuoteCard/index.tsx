import { Link } from "react-router-dom";
import Avatar from "../Avatar";
import styles from "./QuoteCard.module.scss";
import deadend4 from "../../assets/deadend4.jpg";

interface QuoteCardProps {
  image: string;
  author: string;
  title: string;
  description: string;
  url: string;
  newTab: boolean;
}
export default function QuoteCard({
  image = deadend4,
  author = "Неизвестен",
  title = "Без названия",
  description = "[ДАННЫЕ УДАЛЕНЫ]",
  url = "",
  newTab = false,
}: QuoteCardProps): JSX.Element {
  return (
    <Link
      to={url}
      target={newTab ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className={styles.card}
    >
      <Avatar image={image} />
      <div className={styles.quoteMessage}>
        <div className={styles.titleBlock}>
          <p className={styles.title}>{title}</p>
          <p className={styles.author}>{author}</p>
        </div>

        <p className={styles.description}>{description}</p>
      </div>
    </Link>
  );
}
